import request from '@/utils/request'

export const getUserCurrent = async () => {
    const res = await request.get('user/me')
    return res
}
