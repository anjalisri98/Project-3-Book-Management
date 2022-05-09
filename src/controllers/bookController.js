




let getBlog = async function (req, res) {
    try {
        let query = req.query;
        let filter = {
            isDeleted: false,
            isPublished: true,
        };
        if (Object.keys(query).length > 0) {
            if (query.tags) {
                query.tags = { $in: query.tags.split(",") };
            }
            if (query.subcategory) {
                query.subcategory = { $in: query.subcategory.split(",") };
            }
            filter['$or'] = [
                { authorId: query.authorId },
                { category: query.category },
                { subcategory: query.subcategory },
                { tags: query.tags },
                { body: query.body },
                { title: query.title },
            ];
        }
        let filterByquery = await blogSchema.find(filter)
        if (filterByquery.length <= 0) {
            return res.status(404).send({ msg: "Blog Not Found" });
        }
        res.status(200).send({ msg: filterByquery });
    } catch (err) {
        return res.status(500).send({ statuS: false, msg: err.message });
    }
};