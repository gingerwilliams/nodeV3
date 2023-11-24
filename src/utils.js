export const listNotes = (notes) => {
    const list = notes.map(n => {
        return `\n\nNOTE: ${n.content} | TAGS: ${n.tags} | ID: ${n.id}`
    });

    return list.toString()
}