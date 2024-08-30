import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiintegracao.milvus.com.br/api',
    headers: {
        'Authorization': 'nXJRPnLhsM2ND0WhHXapTpsO5EuQWZbRtgLxoG55Imj5sYN1aw01Z7HpsSvALXP9GCVuKo6cBMppG2NKA1FuKVxlAqiSxElgS8jLh'
    }
});

export default api;