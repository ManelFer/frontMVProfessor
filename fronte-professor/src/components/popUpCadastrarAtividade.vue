<script setup lang="ts">

import { X } from "lucide-vue-next"
import { ref } from "vue"

const emit = defineEmits(["close", "save"])

const nome = ref("")
const descricao = ref("")
const link = ref("")


function salvar() {

    emit("save", {
        nome: nome.value,
        descricao: descricao.value,
        link: link.value
    })

    emit("close")

}

</script>

<template>

    <div class="overlay">

        <div class="modal">

            <div class="modal-header">

                <h2>Nova Atividade</h2>

                <button class="close" @click="$emit('close')">
                    <X class="icon" />
                </button>

            </div>

            <div class="form">

                <div class="form-group">
                    <label>Nome da atividade</label>
                    <input v-model="nome" placeholder="Ex: Lista de exercícios 1" />
                </div>

                <div class="form-group">
                    <label>Descrição rápida</label>
                    <textarea v-model="descricao" placeholder="Descreva a atividade" />
                </div>

                <div class="form-group">
                    <label>Link da atividade</label>
                    <input v-model="link" placeholder="https://..." />
                </div>

            </div>

            <div class="actions">

                <button class="btn-cancel" @click="$emit('close')">
                    Cancelar
                </button>

                <button class="btn-save" @click="salvar">
                    Criar atividade
                </button>

            </div>

        </div>

    </div>

</template>
<style scoped src="../style/popUpCadastrarAtividade.css"></style>