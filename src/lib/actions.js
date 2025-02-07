'use server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'


//  ------------------------ REPARTIDORES ------------------------
export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
 
    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })
    revalidatePath('/repartidores')
}
export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono
        }
    })
    revalidatePath('/repartidores')
}
export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))
    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/repartidores')
}
//  ------------------------ PEDIDOS ------------------------
export async function insertarPedidos(formData) {
    const nombreCliente = formData.get('nombre')
    const fechaHora= new Date(formData.get('fechaHora'))
    const direccion = formData.get('direccion')
    const repartidorId = Number(formData.get('repartidorId'))
   
    await prisma.pedido.create({
        data: {
            nombre: nombreCliente,
            fechaHora: fechaHora,
            direccion: direccion,
            repartidorId: repartidorId,
        }
    })
    revalidatePath('/pedidos')
}
export async function modificarPedidos(formData) {
    const id = Number(formData.get('id'))
    const nombreCliente = formData.get('nombre')
    const fechaHora= new Date(formData.get('fechaHora'))
    const direccion = formData.get('direccion')
    const repartidorId = Number(formData.get('repartidorId'))
   
    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            nombre: nombreCliente,
            fechaHora: fechaHora,
            direccion: direccion,
            repartidorId: repartidorId,
        }
    })
    revalidatePath('/pedidos')
}
export async function eliminarPedidos(formData) {
    const id = Number(formData.get('id'))
    await prisma.pedido.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/pedidos')
}


// ------------------------------- PIZZAS -----------------------
export async function insertarPizzas(formData) {
    const nombre = formData.get('nombre')
    const precio = Number(formData.get('precio'))
    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio,
        }
    })
    revalidatePath('/pizzas')
}
export async function modificarPizzas(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
   const precio = Number(formData.get('precio'))
    await prisma.pizza.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            precio: precio
        }
    })
    revalidatePath('/pizzas')
}
export async function eliminarPizzas(formData) {
    const id = Number(formData.get('id'))

    await prisma.pizza.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/pizzas')
}
