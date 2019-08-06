module.exports = {
    allHome: async (req,res) => {
        const db = await req.app.get('db')
        const results = await db.all_homes()
        res.status(200).send(results)
    },
    newHome: async (req,res) => {
        console.log(req.body)
        const { house_name, house_address, image, mortgage, rent, state, zipcode, city } = req.body
        const db = await req.app.get('db')
        // console.log(req.body)
        const result = await db.new_home({house_name, house_address, image, mortgage, rent, state, zipcode, city})
        // let home = result[0]

        res.status(200).send(result)
    },
    deleteHome: async (req,res) => {
        const { id } = req.params
        const db = await req.app.get('db')
        db.delete_home([id])
        const all = await db.all_homes()

        res.status(200).send(all)
    }
}