import { DimArray, IntDimArray, FloatDimArray } from './DimArray';
import { AsyncInit, IAsyncInit } from './AsyncInit';
export declare class Tensor extends AsyncInit implements IAsyncInit {
    static __tensor__: {
        [id: string]: Tensor;
    };
    id: string;
    data: DimArray;
    data_is_pointer: boolean;
    type: string;
    constructor($?: any);
    static deserialize(str: string): Tensor;
    serialize(optimizeStorage?: boolean): {
        data: ArrayBuffer;
        view: DataView;
        toString: any;
    };
    finish(id: string): void;
    delete(): Promise<void>;
    autograd(state: boolean): Promise<void>;
    get(param_name?: string, response_as_tensor?: boolean): Promise<Tensor | string>;
    protected cmd(options: {
        [key: string]: any;
        functionCall: string;
        tensorIndexParams?: any[];
    }): SocketCMD;
    is_contiguous(): Promise<boolean>;
    to_numpy(): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    __repr__(verbose?: boolean): Promise<string>;
    abs(): Promise<this>;
    abs_(): Promise<this>;
    acos(): Promise<this>;
    acos_(): Promise<this>;
    addmm_(x: Tensor, y: Tensor): Promise<this>;
    addmm(x: Tensor, y: Tensor): Promise<this>;
    addmv_(x: Tensor, y: Tensor): Promise<this>;
    addmv(x: Tensor, y: Tensor): Promise<this>;
    asin(): Promise<this>;
    asin_(): Promise<this>;
    atan(): Promise<this>;
    atan_(): Promise<this>;
    backward(grad?: any): Promise<void>;
    ceil(): Promise<this>;
    ceil_(): Promise<this>;
    contiguous(): Promise<this>;
    copy(): Promise<this>;
    cos(): Promise<this>;
    cos_(): Promise<this>;
    cosh(): Promise<this>;
    cosh_(): Promise<this>;
    children(): Promise<never[]>;
    creation_op(): Promise<string | Tensor>;
    creators(): Promise<string[]>;
    cumsum(dim?: number): Promise<this>;
    dataOnGpu(): Promise<boolean>;
    exp(): Promise<this>;
    exp_(): Promise<this>;
    expand(...args: number[]): Promise<this>;
    index_add(indices: any, dim: number, x: Tensor): Promise<this>;
    index_add_(indices: any, dim: number, x: Tensor): Promise<this>;
    index_select(dim: number, indices: any): Promise<this>;
    keepgrad(): Promise<boolean>;
    pow(x: number | Tensor): Promise<this>;
    pow_(x: number | Tensor): Promise<this>;
    floor(): Promise<this>;
    floor_(): Promise<this>;
    round(): Promise<this>;
    round_(): Promise<this>;
    mm(x: Tensor): Promise<this>;
    grad(): Promise<string | Tensor>;
    neg(): Promise<this>;
    neg_(): Promise<this>;
    relu(): Promise<this>;
    save(filename: string): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    set(param_name?: string, params?: any[]): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    sigmoid_(): Promise<this>;
    sigmoid(): Promise<this>;
    sign(): Promise<this>;
    sign_(): Promise<this>;
    sin(): Promise<this>;
    sin_(): Promise<this>;
    size(): Promise<string | Tensor>;
    shape(as_list?: boolean): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    softmax(dim?: number): Promise<this>;
    std(dim?: number): Promise<this>;
    stride(dim?: number): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    sqrt(): Promise<this>;
    sqrt_(): Promise<this>;
    trace(): Promise<this>;
    trunc(): Promise<this>;
    view(...args: any[]): Promise<this>;
    view_(...args: any[]): Promise<this>;
    view_as(x: Tensor): Promise<this>;
    view_as_(x: Tensor): Promise<this>;
    T(): Promise<this>;
    triu(k?: number): Promise<this>;
    triu_(k?: number): Promise<this>;
    unsqueeze(dim: number): Promise<this>;
    unsqueeze_(dim: number): Promise<this>;
    zero_(): Promise<this>;
    toString(): Promise<string>;
    cpu(): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    gpu(): Promise<string | number | boolean | any[] | FloatTensor | IntTensor | undefined>;
    arithmetic_operation(x: number | Tensor, name: string, inline?: boolean): Promise<this>;
    sinh(): Promise<this>;
    sinh_(): Promise<this>;
    log(): Promise<this>;
    log_(): Promise<this>;
    log1p_(): Promise<this>;
    log1p(): Promise<this>;
    frac(): Promise<this>;
    frac_(): Promise<this>;
    reciprocal(): Promise<this>;
    reciprocal_(): Promise<this>;
    rsqrt(): Promise<this>;
    rsqrt_(): Promise<this>;
    remainder(x: number | Tensor): Promise<this>;
    remainder_(x: number | Tensor): Promise<this>;
    sample(dim: number): Promise<this>;
    tan(): Promise<this>;
    tan_(): Promise<this>;
    tanh(): Promise<this>;
    squeeze(dim?: number): Promise<this>;
    squeeze_(dim?: number): Promise<this>;
    min(dim?: number, keepdim?: boolean): Promise<this>;
    max(dim?: number, keepdim?: boolean): Promise<this>;
    sum(dim?: number, keepdim?: boolean): Promise<this>;
    prod(dim?: number, keepdim?: boolean): Promise<this>;
    mean(dim?: number, keepdim?: boolean): Promise<this>;
}
export declare class IntTensor extends Tensor {
    data: IntDimArray;
    type: string;
    constructor(data: string | any[] | IntDimArray, data_is_pointer?: boolean);
}
export declare class FloatTensor extends Tensor {
    data: FloatDimArray;
    type: string;
    constructor(data: string | any[] | FloatDimArray, autograd?: boolean, data_is_pointer?: boolean);
}
