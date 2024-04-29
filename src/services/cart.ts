export type Tcart = {
    no: string
    name : string
    desc: string
    stuffs: Array<any>
}

import { useStorage } from '@vueuse/core'

export const cart =  useStorage<Tcart>('cart-data',{
    no: '',
    name : '',
    desc: '',
    stuffs: []  
})

export const clearCart = () => {
    cart.value.no = ''
    cart.value.name = ''
    cart.value.desc = ''
    cart.value.stuffs = []
}