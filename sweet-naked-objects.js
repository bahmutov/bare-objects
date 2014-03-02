// sweet.js syntax for naked objects
// <> is equivalent to Object.create(null)
// which creates new object without inheriting from
// Object.prototype

macro <> { rule {} => { Object.create(null) } }

export <>
