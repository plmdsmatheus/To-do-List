// src/app/lista/lista.component.ts
import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista/lista.service';
import { Tarefa } from '../tarefa';

@Component({
 selector: 'app-lista',
 templateUrl: './lista.component.html',
 styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 tarefas: Tarefa[] = [];

 constructor(private listaService: ListaService) { }

 ngOnInit(): void {
    this.tarefas = this.listaService.tarefas;
 }

 editarTarefa(index: number, tarefa: Tarefa) {
    this.listaService.editarTarefa(index, tarefa);
 }

 excluirTarefa(index: number) {
    this.listaService.excluirTarefa(index);
 }

 suspenderTarefa(index: number) {
    this.listaService.suspenderTarefa(index);
 }

 finalizarTarefa(index: number) {
    this.listaService.finalizarTarefa(index);
 }
}