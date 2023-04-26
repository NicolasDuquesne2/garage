import {create} from 'zustand'

export const useStore = create((set) => ({
    showAddModal: false,
    setShowAddModal: (bool) => set((state) => ({showAddModal: bool})),
    showUpdateModal: false,
    setShowUpdateModal: (bool) => set((state) => ({showUpdateModal: bool})),
    showDelModal: false,
    setShowDelModal : (bool) => set((state) => ({showDelModal: bool})),
    carData: null,
    setCarData: (car) => set((state) => ({carData: car})),
}))