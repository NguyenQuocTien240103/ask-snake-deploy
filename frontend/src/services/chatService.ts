import request from '@/utils/request'

export const prompt = async (payload: any) => {
    const res = await request.post('chat/prompt', payload)
    return res
}