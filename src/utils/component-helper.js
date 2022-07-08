export const mapper = (object, Component) => { 
    return object.map(m => <Component {...m} key={m.id} />) 
}