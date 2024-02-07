import { Todo } from "../models/Todo";
import TagsInput from "@/app/components/tag/TagsInput";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    //TODO: API URL設定
    const url = API_URL + "../api/todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    //TODO: API URL設定
    const url = API_URL + "../api/todo/add";
    const data = JSON.stringify(todos);
    //TODO: APIで保存し、データを返す
}
