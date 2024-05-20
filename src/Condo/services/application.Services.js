import API from "./api";
import { baseURL } from "./urls";
import { Axios } from "axios";

export const espaco = async (param) => {
    try {
        const response = await API.get(`${baseURL}/660/espaco`, { params: param }); // Usar 'params' para enviar parâmetros na solicitação GET
        return response.data; // Retornar os dados da resposta
    } catch (error) {
        console.error("Erro ao buscar dados do espaço:", error);

    }
}

export const titular = async (param) => {
    try {
        const response = await API.get(`${baseURL}/660/titular`, { params: param });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do titular:", error)
    }
}

export const dependente = async (param) => {
    try {
        const response = await API.get(`${baseURL}/660/dependente`, { params: param });
        return response.data;
    }catch (error) {
        console.error("Erro ao buscar dados do dependente:", error)
     
    }
}

export const salvarApartamento = async (param) => {
    try {
        const response = await API.post(`${baseURL}/660/apartamento`, param);
        return response.data;
    }catch (error) {
        console.error("Erro ao cadastrar apartamento:", error)
     
    }
}

export const cadastrarEspaco = async (param) => {
    try {
        const response = await API.post(`${baseURL}/660/espaco`, param);
        return response.data;
    }catch (error) {
        console.error("Erro ao cadastrar espaço:", error)
     
    }
}

