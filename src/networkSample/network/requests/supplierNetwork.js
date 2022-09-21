import { baseNetwork } from "../base/baseNetwork"


export const supplierNetwork = {
    getAllSuppliers : () => {

        return baseNetwork.getAll("suppliers")
  

    }
}