import request from '@/utils/request'

export const prompt = async (payload: FormData) => {
    const res = await request.post('chat/prompt', payload)
    return res
}