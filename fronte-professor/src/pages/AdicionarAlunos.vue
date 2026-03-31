<script setup lang="ts">

import SideBar from "../components/sideBar.vue"
import { Search, Plus, User, Trash2 } from "lucide-vue-next"
import AddAlunoModal from "../components/AddAlunoModal.vue";
import { ref } from "vue";
const openModal = ref(false)
</script>

<template>

    <div class="layout">

        <SideBar />

        <div class="main">
            <div class="content">

                <!-- HEADER -->

                <div class="page-header">

                    <div>
                        <h1>Alunos</h1>
                        <p>Gerencie os estudantes matriculados na plataforma.</p>
                    </div>

                    <div class="header-actions">

                        <div class="search">

                            <Search class="icon" />

                            <input placeholder="Buscar aluno..." />

                        </div>

                        <button class="btn-add" @click="openModal = true">
                            <Plus class="icon" />
                            Adicionar Aluno
                        </button>

                    </div>

                </div>


                <!-- TABLE -->

                <div class="table-card">

                    <table>

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>

                                <td class="student">

                                    <div class="avatar">
                                        <User class="icon" />
                                    </div>

                                    <div>
                                        <strong>Ana Beatriz Oliveira</strong>
                                        <p>ana.beatriz@email.com</p>
                                    </div>

                                </td>
                                <td class="actions">
                                    <Trash2 class="icon" />
                                </td>

                            </tr>


                            <tr>

                                <td class="student">

                                    <div class="avatar">
                                        <User class="icon" />
                                    </div>

                                    <div>
                                        <strong>Guilherme Santos</strong>
                                        <p>guilherme.s@email.com</p>
                                    </div>

                                </td>
                                <td class="actions">
                                    <Trash2 class="icon" />
                                </td>

                            </tr>


                            <tr>

                                <td class="student">

                                    <div class="avatar">
                                        <User class="icon" />
                                    </div>

                                    <div>
                                        <strong>Mariana Costa</strong>
                                        <p>mariana.c@email.com</p>
                                    </div>

                                </td>
                                <td class="actions">
                                    <Trash2 class="icon" />
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </div>
    <AddAlunoModal
        v-if="openModal"
        @close="openModal = false"
        @save="(aluno)=>console.log(aluno)" 
    />

</template>
<style scoped src="../style/adicionarAlunos.css"></style>
