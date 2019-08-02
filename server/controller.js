module.exports = {
    allHome: async (req,res) => {
        const db = await req.app.get('db')
        const results = await db.all_homes()
        res.status(200).send(results)
    },
    newHome: async (req,res) => {
        const { house_name, house_price, house_address } = req.body
        const db = await req.app.get('db')
        // console.log(req.body)
        const result = await db.new_home({house_name, house_price, house_address})
        // let home = result[0]

        res.status(200).send(result)
    },
    deleteHome: async (req,res) => {
        const { id } = req.params
        const db = await req.app.get('db')
        const result = await db.delete_home([id])
        const all = await db.all_homes()

        res.status(200).send(all)
    }
}