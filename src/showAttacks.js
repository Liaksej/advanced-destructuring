export default function showAttacks({special}) {
    const attacksList = [];
    special.forEach(element => {
        if (!("description" in element)) {
            element.description = undefined;
        }
        const {id, name, description, icon} = element
        attacksList.push({id, name, description, icon})
    })
    return attacksList
}
