type GenericComponentProps <T> = {
    prop1: T
    prop2: Array<T>
}

function GenericComponent <T> ({prop1, prop2} : GenericComponentProps <T>){}

