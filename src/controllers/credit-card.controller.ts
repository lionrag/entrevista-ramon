import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

import CreditCard from '../models/credit-card'
import User from '../models/user'
import config from '../config/config'
import { BrandTypes } from '../constants'


export const create = async (req: Request, res: Response) => {
    const { userId } = req.body

    const brandType = req.body.brandType.toUpperCase()
    const user = User.findById(userId)
    if (!user) {
        return res.status(400).json({msg: 'The user does not exists'})
    }

    if (!(brandType in BrandTypes)) {
        return res.status(400).json({msg: 'The brand type does not exists'})
    }

    const cardToken = createCardToken(userId, brandType)
    const maskedNumber = createMaskedNumber()

    const creditCards = await CreditCard.find({userId: userId})
    const primary = creditCards.length === 0
    const newCreditCard = await CreditCard.create({
        cardToken,
        brandType,
        maskedNumber,
        primary,
        userId,
    })

   await newCreditCard.save()
    res.status(201).json(newCreditCard)
}

export const byUser = async (req: Request, res: Response) => {
    const creditCards = await CreditCard.find({userId: `${req.query.userId}`})
    res.json(creditCards)
}

function createCardToken(userId: string, brandType: string){
    return jwt.sign({userId, brandType}, config.jwtSecret, {
        expiresIn: 86400
    })
}

function createMaskedNumber() {
    const number = Math.floor(1000 + Math.random() * 9000)
    return `******${number}`
}