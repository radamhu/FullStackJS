// next a middleare elvégezte a dolgát tovább léphet a köv valamire
export const reduxLogger = store => next => action => {
    // action tpe alapján szerezném az infókat összekapcsolni
    console.group(action.type);
    console.info('DISPATCH', action)
    const result = next(action);
    console.log('STATE', store.getState())
    console.groupEnd()
    return result
}