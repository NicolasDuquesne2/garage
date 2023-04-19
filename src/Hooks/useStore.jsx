import {create} from 'zustand'

export const useStore = create((set) => ({
    showAddModal: null,
    setShowAddModal: (params) => set((state) => ({showAddModal: params})),
    showUpdateModal: null,
    setShowUpdateModal: (params) => set((state) => ({showUpdateModal: params})),
    showDelModal: null,
    setShowDelModal : (params) => set((state) => ({showDelModal: params})),
    carData: null,
    setCarData: (car) => set((state) => ({carData: car})),
}))