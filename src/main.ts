import axios from 'axios';
import aliyunApi from './AliyunApi';

const axiosInstance = axios.create({});
let accIp = ''
class main {
    constructor(parameters) {

    }
    static recordId = ''
    static async changeIp(ip: string) {
        console.log({ currentIp: ip, PreviewIp: accIp });

        if (accIp === ip) {
            return
        }
        else {
            await aliyunApi.updateDomainRecord({ ip, RR: process.env.SUB_DOMAIN as string, type: 'A', recordId: this.recordId });
            accIp = ip
        }
    }
    static async getCurrentIP() {
        const { data: { detailsInfo: { ipv4 } } } = await axiosInstance.get('https://e3qcmv54wv.hk.aircode.run/getip')
        this.changeIp(ipv4)
    }
    static async intervalCheckIp() {
        const { body: { domainRecords: { record } } } = await aliyunApi.DescribeDomainRecords(process.env.DOMAIN as string)

        const {recordId} = record.find(item => {
            return item.RR === process.env.SUB_DOMAIN
        })

        this.recordId = recordId
        setInterval(() => {
            this.getCurrentIP()
        }, 1000 * parseInt(process.env.CHECK_CYCLE as string || '60'))
    }
}

main.intervalCheckIp()
