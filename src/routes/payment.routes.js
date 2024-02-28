import { Router } from "express";

const router = Router();

router.post('/create-checkout-session', (req, res) => res.send ('checkout'))
router.get('/success', (req, res) => res.send ('success'))
router.get('cancel', (req, res) => res.send ('cancel'))


export default router;