import { defineStore } from "pinia";


export const usecontentStore = defineStore('content',{
    state: () => {
        return {
            data: [],
        }
    },
    actions: {
        setData(data: []) {
            this.data = data
        }
    },
})