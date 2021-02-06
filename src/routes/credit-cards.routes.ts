import { Router } from 'express'
import passport from 'passport'
import * as creditCardController from "../controllers/credit-card.controller";

const router = Router()

router.post('/', passport.authenticate('jwt', {session: false}), creditCardController.create)
router.get('/', passport.authenticate('jwt', {session: false}), creditCardController.byUser)

export default router