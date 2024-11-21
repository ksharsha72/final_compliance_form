function createDOMElement(obj = { ...attributes }) {

    for (attr in attributes) {
        console.log(attr)

        eleType = attr.eleType
        parent = attr.parent
        close_relative = attr.close_relative

        if (eleType === null || eleType === undefined) {
            console.log("Specify th element type")
        }
        else {
            try {
                console.log(eleType)
                document.createElement("input")
                console.log("------")
                new_element = document.createElement(eleType)
                if (parent) {

                    relative_first_class = target.closet()
                    pNode = target.parent
                    console.log(relative)
                    console.log(pNode)

                }
            }
            catch (error) {
                throw new Error("The specified element cannot be created ")
            }
        }
    }
}