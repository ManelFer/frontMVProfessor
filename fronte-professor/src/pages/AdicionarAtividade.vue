<script setup lang="ts">
import { Plus, Search } from 'lucide-vue-next';
import SideBar from '../components/sideBar.vue';
import popUpCadastrarAtividade from '../components/popUpCadastrarAtividade.vue';
import { ref } from 'vue';
const abrirModal = ref(false)


</script>
<template>
    <div class="layout">
        <SideBar />
        <div class="main">
            <div class="content">
                <!-- Header -->
                <div class="page-header">
                    <div>
                        <h1> Atividade </h1>
                        <p> Crie e gerencie atividades para seus alunos </p>
                    </div>
                    <button class="btn-add" @click="abrirModal = true">
                        <Plus class="icon" />
                        Nova Atividade
                    </button>
                </div>

                <!-- pesquisa -->
                <div class="search">
                    <Search class="icon" />
                    <input placeholder="Buscar atividades..." />
                </div>

                <!-- state -->
                <!-- <div class="empty-state">
                    <div class="empty-icon">
                        <FileText class="icon-large" />
                    </div>
                    <h3> Nenhuma atividade encontrada </h3>
                    <p> Crie sua atividade </p>
                    <button class="btn-create">
                        <Plus class="icon" />
                        Nova Atividade
                    </button>
                </div> -->
            </div>
        </div>
    </div>
    <popUpCadastrarAtividade
        v-if="abrirModal"
        @close="abrirModal = false"
        @save="(atividade)=>console.log(atividade)"
    />
</template>
<style scoped src="../style/adicionarAtividade.css"></style>