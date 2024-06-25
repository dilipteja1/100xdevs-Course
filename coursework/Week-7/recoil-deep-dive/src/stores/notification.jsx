import {atom, atomFamily, selector, selectorFamily} from "recoil"
import axios from 'axios'
import {todos}from '../todos'

export const notificationAtom = atom({
    key : "notificationAtom",
    default: selector({
        key : "notificationSelector",
        get: async ({get}) => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
        const network = get(notificationAtom)
        return network.network+ 
        network.jobs + 
        network.notifications +
        network.messaging
    }
})

export const getAtom = atomFamily({
    key: "getAtom",
    default: id => {
        return todos.find((x) => x.id === id)
    } 
})

export const getAtomfromBackend = atomFamily({
    key: "getAtomFromBackend",
    default: 
         selectorFamily({
            key: "atomSelectorfromBackend",
            get: (id) => async ({get}) => {
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                return res.data.todo;
            }
        })
})