// This file is auto-generated, don't edit it
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import Alidns20150109, * as $Alidns20150109 from '@alicloud/alidns20150109';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import { type } from 'os';
const ALIBABA_CLOUD_ACCESS_KEY_ID = process.env.KEY_ID as string
const ALIBABA_CLOUD_ACCESS_KEY_SECRET = process.env.KEY_SECRET as string

export default class aliyunApi {

  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(accessKeyId: string, accessKeySecret: string): Alidns20150109 {
    let config = new $OpenApi.Config({
      // 必填，您的 AccessKey ID
      accessKeyId: accessKeyId,
      // 必填，您的 AccessKey Secret
      accessKeySecret: accessKeySecret,
    });
    // Endpoint 请参考 https://api.aliyun.com/product/Alidns
    config.endpoint = `alidns.cn-hangzhou.aliyuncs.com`;
    return new Alidns20150109(config);
  }

  static async updateDomainRecord(payload: { ip: string, RR: string, type: string, recordId: string }): Promise<void> {
    // 请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
    // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例使用环境变量获取 AccessKey 的方式进行调用，仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html
    let client = aliyunApi.createClient(ALIBABA_CLOUD_ACCESS_KEY_ID, ALIBABA_CLOUD_ACCESS_KEY_SECRET);
    let updateDomainRecordRequest = new $Alidns20150109.UpdateDomainRecordRequest({
      recordId: payload.recordId,
      RR: payload.RR,
      type: payload.type,
      value: payload.ip,
    });
    let runtime = new $Util.RuntimeOptions({});
    try {
      // 复制代码运行请自行打印 API 的返回值
      const result = await client.updateDomainRecordWithOptions(updateDomainRecordRequest, runtime);
    } catch (error) {
      // 如有需要，请打印 error
      Util.assertAsString(error.message);
      console.log(error);
    }
  }
  static async DescribeDomainRecords(domainName: string): Promise<any> {
    // 请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
    // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例使用环境变量获取 AccessKey 的方式进行调用，仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html
    let client = aliyunApi.createClient(ALIBABA_CLOUD_ACCESS_KEY_ID, ALIBABA_CLOUD_ACCESS_KEY_SECRET);
    let describeDomainRecordsRequest = new $Alidns20150109.DescribeDomainRecordsRequest({
      domainName,
    });
    let runtime = new $Util.RuntimeOptions({});
    try {
      // 复制代码运行请自行打印 API 的返回值
      const result =  await client.describeDomainRecordsWithOptions(describeDomainRecordsRequest, runtime);
      return result
    } catch (error) {
      // 如有需要，请打印 error
      Util.assertAsString(error.message);
      console.log(error);
      
    }
  }
}
