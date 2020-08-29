const Holst = require('../models/Holst')
const fs = require('fs')
const config = require('config')

class HolstController {
    async createHolst(req, res) {
        try {
            const {title} = req.body
            const holstFromDb = await Holst.findOne({title, owner: req.user.id})
            if (holstFromDb) {
                return res.status(400).json({message: `Holst with title ${title} already exists`})
            }
            const holst = new Holst({title, owner: req.user.id})
            await holst.save()
            return res.json(holst)
        } catch (e) {
            return res.status(500).json({message: 'Holst create error'})
        }
    }

    async getHolsts(req, res) {
        try {
            const holsts = await Holst.find({owner: req.user.id})
            holsts.map(holst => {
                if (holst.img) {
                    holst.img = config.get('ApiUrl') + holst.img;
                }
            })
            return res.json(holsts)
        } catch (e) {
            return res.status(500).json({message: 'Holst create error'})
        }
    }

    async getCurrentHolst(req, res) {
        try {
            const id = req.query.id
            const holst = await Holst.findOne({_id:id})
            if (holst.img) {
                holst.img = config.get('ApiUrl') + holst.img;
            }
            return res.json(holst)
        } catch (e) {
            return res.status(500).json({message: 'Holst create error'})
        }
    }

    async saveHolst(req, res) {
        try {
            const img = req.files.img
            const {id} = req.body
            const holst = await Holst.findOne({_id:id})
            if (!holst) {
                return res.status(400).json(`Holst not found`)
            }
            img.mv(`holsts\\${id}.jpg`)
            holst.img = holst.id + '.jpg'
            holst.updated = Date.now()
            await holst.save()
            return res.json(holst)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'Holst save error'})
        }
    }
}

module.exports = new HolstController()
