import { BehaviorSubject } from 'rxjs'

const writable = (initialValue) => {
    
    const subject = new BehaviorSubject(initialValue)

    return {
        set: (value) => subject.next(value),
        get: () => subject.getValue(),
        sub: (func) => {
            subject.subscribe(func)
        }
    }
}

export default writable