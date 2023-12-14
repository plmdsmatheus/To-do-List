import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  novaTarefa: string = '';
  tarefas: any[] = [];
  tarefaSelecionada: any;

  adicionarTarefa() {
    const novaTarefaObj = {
      nome: this.novaTarefa,
      data: new Date(),
      status: 'Pendente'
    };

    this.tarefas.push(novaTarefaObj);
    this.novaTarefa = '';
  }

  exibirOpcoes(tarefa: any) {
    this.tarefaSelecionada = tarefa;
  }

  editarTarefa(tarefa: any) {
    // Lógica para editar a tarefa
    const novoNome = prompt('Novo nome:', tarefa.nome);
    const novaData = prompt('Nova data (Formato: YYYY-MM-DD):', this.formatDate(tarefa.data));

    if (novoNome !== null && novoNome !== undefined) {
      tarefa.nome = novoNome;
    }

    if (novaData !== null && novaData !== undefined) {
      const novaDataObj = new Date(novaData);
      if (!isNaN(novaDataObj.getTime())) {
        tarefa.data = novaDataObj;
      } else {
        alert('Formato de data inválido. A data não foi alterada.');
      }
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

  suspenderTarefa(tarefa: any) {
    // Lógica para suspender a tarefa
    tarefa.status = 'Suspensa';
  }

  excluirTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
      this.tarefaSelecionada = null;
    }
  }

  finalizarTarefa(tarefa: any) {
    // Lógica para finalizar a tarefa
    tarefa.concluida = true;
    tarefa.status = 'Finalizada';
  }
}
