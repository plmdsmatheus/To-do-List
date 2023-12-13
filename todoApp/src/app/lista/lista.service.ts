import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa';

@Injectable({
 providedIn: 'root'
})
export class ListaService {
 tarefas: Tarefa[] = [];

 constructor() { }

 criarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
 }

 editarTarefa(index: number, tarefa: Tarefa) {
    this.tarefas[index] = tarefa;
 }

 excluirTarefa(index: number) {
    this.tarefas.splice(index, 1);
 }

 suspenderTarefa(index: number) {
    this.tarefas[index].status = 'Suspensa';
 }

 finalizarTarefa(index: number) {
    this.tarefas[index].status = 'Superada';
 }
}