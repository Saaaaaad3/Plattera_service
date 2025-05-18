
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MenuItems
 * 
 */
export type MenuItems = $Result.DefaultSelection<Prisma.$MenuItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MenuItems
 * const menuItems = await prisma.menuItems.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MenuItems
   * const menuItems = await prisma.menuItems.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.menuItems`: Exposes CRUD operations for the **MenuItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItems.findMany()
    * ```
    */
  get menuItems(): Prisma.MenuItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MenuItems: 'MenuItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "menuItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MenuItems: {
        payload: Prisma.$MenuItemsPayload<ExtArgs>
        fields: Prisma.MenuItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          findFirst: {
            args: Prisma.MenuItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          findMany: {
            args: Prisma.MenuItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>[]
          }
          create: {
            args: Prisma.MenuItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          createMany: {
            args: Prisma.MenuItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>[]
          }
          delete: {
            args: Prisma.MenuItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          update: {
            args: Prisma.MenuItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          aggregate: {
            args: Prisma.MenuItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItems>
          }
          groupBy: {
            args: Prisma.MenuItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemsCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    menuItems?: MenuItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MenuItems
   */

  export type AggregateMenuItems = {
    _count: MenuItemsCountAggregateOutputType | null
    _avg: MenuItemsAvgAggregateOutputType | null
    _sum: MenuItemsSumAggregateOutputType | null
    _min: MenuItemsMinAggregateOutputType | null
    _max: MenuItemsMaxAggregateOutputType | null
  }

  export type MenuItemsAvgAggregateOutputType = {
    itemId: number | null
    restId: number | null
    itemPrice: Decimal | null
    itemSweetLevel: number | null
    itemSpiceLevel: number | null
  }

  export type MenuItemsSumAggregateOutputType = {
    itemId: number | null
    restId: number | null
    itemPrice: Decimal | null
    itemSweetLevel: number | null
    itemSpiceLevel: number | null
  }

  export type MenuItemsMinAggregateOutputType = {
    itemId: number | null
    itemName: string | null
    restId: number | null
    itemPrice: Decimal | null
    itemDescription: string | null
    itemSweet: boolean | null
    itemSpicy: boolean | null
    itemSweetLevel: number | null
    itemSpiceLevel: number | null
    itemAvailable: boolean | null
    itemBestSeller: boolean | null
    itemIsVeg: boolean | null
    itemIsJain: boolean | null
  }

  export type MenuItemsMaxAggregateOutputType = {
    itemId: number | null
    itemName: string | null
    restId: number | null
    itemPrice: Decimal | null
    itemDescription: string | null
    itemSweet: boolean | null
    itemSpicy: boolean | null
    itemSweetLevel: number | null
    itemSpiceLevel: number | null
    itemAvailable: boolean | null
    itemBestSeller: boolean | null
    itemIsVeg: boolean | null
    itemIsJain: boolean | null
  }

  export type MenuItemsCountAggregateOutputType = {
    itemId: number
    itemName: number
    restId: number
    itemPrice: number
    itemDescription: number
    itemSweet: number
    itemSpicy: number
    itemSweetLevel: number
    itemSpiceLevel: number
    itemAvailable: number
    itemBestSeller: number
    itemIsVeg: number
    itemIsJain: number
    _all: number
  }


  export type MenuItemsAvgAggregateInputType = {
    itemId?: true
    restId?: true
    itemPrice?: true
    itemSweetLevel?: true
    itemSpiceLevel?: true
  }

  export type MenuItemsSumAggregateInputType = {
    itemId?: true
    restId?: true
    itemPrice?: true
    itemSweetLevel?: true
    itemSpiceLevel?: true
  }

  export type MenuItemsMinAggregateInputType = {
    itemId?: true
    itemName?: true
    restId?: true
    itemPrice?: true
    itemDescription?: true
    itemSweet?: true
    itemSpicy?: true
    itemSweetLevel?: true
    itemSpiceLevel?: true
    itemAvailable?: true
    itemBestSeller?: true
    itemIsVeg?: true
    itemIsJain?: true
  }

  export type MenuItemsMaxAggregateInputType = {
    itemId?: true
    itemName?: true
    restId?: true
    itemPrice?: true
    itemDescription?: true
    itemSweet?: true
    itemSpicy?: true
    itemSweetLevel?: true
    itemSpiceLevel?: true
    itemAvailable?: true
    itemBestSeller?: true
    itemIsVeg?: true
    itemIsJain?: true
  }

  export type MenuItemsCountAggregateInputType = {
    itemId?: true
    itemName?: true
    restId?: true
    itemPrice?: true
    itemDescription?: true
    itemSweet?: true
    itemSpicy?: true
    itemSweetLevel?: true
    itemSpiceLevel?: true
    itemAvailable?: true
    itemBestSeller?: true
    itemIsVeg?: true
    itemIsJain?: true
    _all?: true
  }

  export type MenuItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to aggregate.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemsMaxAggregateInputType
  }

  export type GetMenuItemsAggregateType<T extends MenuItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItems[P]>
      : GetScalarType<T[P], AggregateMenuItems[P]>
  }




  export type MenuItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemsWhereInput
    orderBy?: MenuItemsOrderByWithAggregationInput | MenuItemsOrderByWithAggregationInput[]
    by: MenuItemsScalarFieldEnum[] | MenuItemsScalarFieldEnum
    having?: MenuItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemsCountAggregateInputType | true
    _avg?: MenuItemsAvgAggregateInputType
    _sum?: MenuItemsSumAggregateInputType
    _min?: MenuItemsMinAggregateInputType
    _max?: MenuItemsMaxAggregateInputType
  }

  export type MenuItemsGroupByOutputType = {
    itemId: number
    itemName: string
    restId: number
    itemPrice: Decimal
    itemDescription: string
    itemSweet: boolean
    itemSpicy: boolean
    itemSweetLevel: number
    itemSpiceLevel: number
    itemAvailable: boolean
    itemBestSeller: boolean
    itemIsVeg: boolean
    itemIsJain: boolean
    _count: MenuItemsCountAggregateOutputType | null
    _avg: MenuItemsAvgAggregateOutputType | null
    _sum: MenuItemsSumAggregateOutputType | null
    _min: MenuItemsMinAggregateOutputType | null
    _max: MenuItemsMaxAggregateOutputType | null
  }

  type GetMenuItemsGroupByPayload<T extends MenuItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemsGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemsGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    itemName?: boolean
    restId?: boolean
    itemPrice?: boolean
    itemDescription?: boolean
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: boolean
    itemSpiceLevel?: boolean
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }, ExtArgs["result"]["menuItems"]>

  export type MenuItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    itemName?: boolean
    restId?: boolean
    itemPrice?: boolean
    itemDescription?: boolean
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: boolean
    itemSpiceLevel?: boolean
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }, ExtArgs["result"]["menuItems"]>

  export type MenuItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    itemName?: boolean
    restId?: boolean
    itemPrice?: boolean
    itemDescription?: boolean
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: boolean
    itemSpiceLevel?: boolean
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }, ExtArgs["result"]["menuItems"]>

  export type MenuItemsSelectScalar = {
    itemId?: boolean
    itemName?: boolean
    restId?: boolean
    itemPrice?: boolean
    itemDescription?: boolean
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: boolean
    itemSpiceLevel?: boolean
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }

  export type MenuItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "itemName" | "restId" | "itemPrice" | "itemDescription" | "itemSweet" | "itemSpicy" | "itemSweetLevel" | "itemSpiceLevel" | "itemAvailable" | "itemBestSeller" | "itemIsVeg" | "itemIsJain", ExtArgs["result"]["menuItems"]>

  export type $MenuItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItems"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      itemName: string
      restId: number
      itemPrice: Prisma.Decimal
      itemDescription: string
      itemSweet: boolean
      itemSpicy: boolean
      itemSweetLevel: number
      itemSpiceLevel: number
      itemAvailable: boolean
      itemBestSeller: boolean
      itemIsVeg: boolean
      itemIsJain: boolean
    }, ExtArgs["result"]["menuItems"]>
    composites: {}
  }

  type MenuItemsGetPayload<S extends boolean | null | undefined | MenuItemsDefaultArgs> = $Result.GetResult<Prisma.$MenuItemsPayload, S>

  type MenuItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemsCountAggregateInputType | true
    }

  export interface MenuItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItems'], meta: { name: 'MenuItems' } }
    /**
     * Find zero or one MenuItems that matches the filter.
     * @param {MenuItemsFindUniqueArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemsFindUniqueArgs>(args: SelectSubset<T, MenuItemsFindUniqueArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemsFindUniqueOrThrowArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindFirstArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemsFindFirstArgs>(args?: SelectSubset<T, MenuItemsFindFirstArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindFirstOrThrowArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItems.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItems.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const menuItemsWithItemIdOnly = await prisma.menuItems.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends MenuItemsFindManyArgs>(args?: SelectSubset<T, MenuItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItems.
     * @param {MenuItemsCreateArgs} args - Arguments to create a MenuItems.
     * @example
     * // Create one MenuItems
     * const MenuItems = await prisma.menuItems.create({
     *   data: {
     *     // ... data to create a MenuItems
     *   }
     * })
     * 
     */
    create<T extends MenuItemsCreateArgs>(args: SelectSubset<T, MenuItemsCreateArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemsCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItems = await prisma.menuItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemsCreateManyArgs>(args?: SelectSubset<T, MenuItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemsCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItems = await prisma.menuItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `itemId`
     * const menuItemsWithItemIdOnly = await prisma.menuItems.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItems.
     * @param {MenuItemsDeleteArgs} args - Arguments to delete one MenuItems.
     * @example
     * // Delete one MenuItems
     * const MenuItems = await prisma.menuItems.delete({
     *   where: {
     *     // ... filter to delete one MenuItems
     *   }
     * })
     * 
     */
    delete<T extends MenuItemsDeleteArgs>(args: SelectSubset<T, MenuItemsDeleteArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItems.
     * @param {MenuItemsUpdateArgs} args - Arguments to update one MenuItems.
     * @example
     * // Update one MenuItems
     * const menuItems = await prisma.menuItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemsUpdateArgs>(args: SelectSubset<T, MenuItemsUpdateArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemsDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemsDeleteManyArgs>(args?: SelectSubset<T, MenuItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItems = await prisma.menuItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemsUpdateManyArgs>(args: SelectSubset<T, MenuItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemsUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItems = await prisma.menuItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `itemId`
     * const menuItemsWithItemIdOnly = await prisma.menuItems.updateManyAndReturn({
     *   select: { itemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItems.
     * @param {MenuItemsUpsertArgs} args - Arguments to update or create a MenuItems.
     * @example
     * // Update or create a MenuItems
     * const menuItems = await prisma.menuItems.upsert({
     *   create: {
     *     // ... data to create a MenuItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItems we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemsUpsertArgs>(args: SelectSubset<T, MenuItemsUpsertArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItems.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemsCountArgs>(
      args?: Subset<T, MenuItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemsAggregateArgs>(args: Subset<T, MenuItemsAggregateArgs>): Prisma.PrismaPromise<GetMenuItemsAggregateType<T>>

    /**
     * Group by MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemsGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItems model
   */
  readonly fields: MenuItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItems model
   */
  interface MenuItemsFieldRefs {
    readonly itemId: FieldRef<"MenuItems", 'Int'>
    readonly itemName: FieldRef<"MenuItems", 'String'>
    readonly restId: FieldRef<"MenuItems", 'Int'>
    readonly itemPrice: FieldRef<"MenuItems", 'Decimal'>
    readonly itemDescription: FieldRef<"MenuItems", 'String'>
    readonly itemSweet: FieldRef<"MenuItems", 'Boolean'>
    readonly itemSpicy: FieldRef<"MenuItems", 'Boolean'>
    readonly itemSweetLevel: FieldRef<"MenuItems", 'Int'>
    readonly itemSpiceLevel: FieldRef<"MenuItems", 'Int'>
    readonly itemAvailable: FieldRef<"MenuItems", 'Boolean'>
    readonly itemBestSeller: FieldRef<"MenuItems", 'Boolean'>
    readonly itemIsVeg: FieldRef<"MenuItems", 'Boolean'>
    readonly itemIsJain: FieldRef<"MenuItems", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MenuItems findUnique
   */
  export type MenuItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems findUniqueOrThrow
   */
  export type MenuItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems findFirst
   */
  export type MenuItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems findFirstOrThrow
   */
  export type MenuItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems findMany
   */
  export type MenuItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems create
   */
  export type MenuItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * The data needed to create a MenuItems.
     */
    data: XOR<MenuItemsCreateInput, MenuItemsUncheckedCreateInput>
  }

  /**
   * MenuItems createMany
   */
  export type MenuItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemsCreateManyInput | MenuItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItems createManyAndReturn
   */
  export type MenuItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemsCreateManyInput | MenuItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItems update
   */
  export type MenuItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * The data needed to update a MenuItems.
     */
    data: XOR<MenuItemsUpdateInput, MenuItemsUncheckedUpdateInput>
    /**
     * Choose, which MenuItems to update.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems updateMany
   */
  export type MenuItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemsUpdateManyMutationInput, MenuItemsUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemsWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItems updateManyAndReturn
   */
  export type MenuItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemsUpdateManyMutationInput, MenuItemsUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemsWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItems upsert
   */
  export type MenuItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * The filter to search for the MenuItems to update in case it exists.
     */
    where: MenuItemsWhereUniqueInput
    /**
     * In case the MenuItems found by the `where` argument doesn't exist, create a new MenuItems with this data.
     */
    create: XOR<MenuItemsCreateInput, MenuItemsUncheckedCreateInput>
    /**
     * In case the MenuItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemsUpdateInput, MenuItemsUncheckedUpdateInput>
  }

  /**
   * MenuItems delete
   */
  export type MenuItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Filter which MenuItems to delete.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems deleteMany
   */
  export type MenuItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemsWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItems without action
   */
  export type MenuItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MenuItemsScalarFieldEnum: {
    itemId: 'itemId',
    itemName: 'itemName',
    restId: 'restId',
    itemPrice: 'itemPrice',
    itemDescription: 'itemDescription',
    itemSweet: 'itemSweet',
    itemSpicy: 'itemSpicy',
    itemSweetLevel: 'itemSweetLevel',
    itemSpiceLevel: 'itemSpiceLevel',
    itemAvailable: 'itemAvailable',
    itemBestSeller: 'itemBestSeller',
    itemIsVeg: 'itemIsVeg',
    itemIsJain: 'itemIsJain'
  };

  export type MenuItemsScalarFieldEnum = (typeof MenuItemsScalarFieldEnum)[keyof typeof MenuItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MenuItemsWhereInput = {
    AND?: MenuItemsWhereInput | MenuItemsWhereInput[]
    OR?: MenuItemsWhereInput[]
    NOT?: MenuItemsWhereInput | MenuItemsWhereInput[]
    itemId?: IntFilter<"MenuItems"> | number
    itemName?: StringFilter<"MenuItems"> | string
    restId?: IntFilter<"MenuItems"> | number
    itemPrice?: DecimalFilter<"MenuItems"> | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFilter<"MenuItems"> | string
    itemSweet?: BoolFilter<"MenuItems"> | boolean
    itemSpicy?: BoolFilter<"MenuItems"> | boolean
    itemSweetLevel?: IntFilter<"MenuItems"> | number
    itemSpiceLevel?: IntFilter<"MenuItems"> | number
    itemAvailable?: BoolFilter<"MenuItems"> | boolean
    itemBestSeller?: BoolFilter<"MenuItems"> | boolean
    itemIsVeg?: BoolFilter<"MenuItems"> | boolean
    itemIsJain?: BoolFilter<"MenuItems"> | boolean
  }

  export type MenuItemsOrderByWithRelationInput = {
    itemId?: SortOrder
    itemName?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemDescription?: SortOrder
    itemSweet?: SortOrder
    itemSpicy?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
    itemAvailable?: SortOrder
    itemBestSeller?: SortOrder
    itemIsVeg?: SortOrder
    itemIsJain?: SortOrder
  }

  export type MenuItemsWhereUniqueInput = Prisma.AtLeast<{
    itemId?: number
    itemName?: string
    AND?: MenuItemsWhereInput | MenuItemsWhereInput[]
    OR?: MenuItemsWhereInput[]
    NOT?: MenuItemsWhereInput | MenuItemsWhereInput[]
    restId?: IntFilter<"MenuItems"> | number
    itemPrice?: DecimalFilter<"MenuItems"> | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFilter<"MenuItems"> | string
    itemSweet?: BoolFilter<"MenuItems"> | boolean
    itemSpicy?: BoolFilter<"MenuItems"> | boolean
    itemSweetLevel?: IntFilter<"MenuItems"> | number
    itemSpiceLevel?: IntFilter<"MenuItems"> | number
    itemAvailable?: BoolFilter<"MenuItems"> | boolean
    itemBestSeller?: BoolFilter<"MenuItems"> | boolean
    itemIsVeg?: BoolFilter<"MenuItems"> | boolean
    itemIsJain?: BoolFilter<"MenuItems"> | boolean
  }, "itemId" | "itemName">

  export type MenuItemsOrderByWithAggregationInput = {
    itemId?: SortOrder
    itemName?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemDescription?: SortOrder
    itemSweet?: SortOrder
    itemSpicy?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
    itemAvailable?: SortOrder
    itemBestSeller?: SortOrder
    itemIsVeg?: SortOrder
    itemIsJain?: SortOrder
    _count?: MenuItemsCountOrderByAggregateInput
    _avg?: MenuItemsAvgOrderByAggregateInput
    _max?: MenuItemsMaxOrderByAggregateInput
    _min?: MenuItemsMinOrderByAggregateInput
    _sum?: MenuItemsSumOrderByAggregateInput
  }

  export type MenuItemsScalarWhereWithAggregatesInput = {
    AND?: MenuItemsScalarWhereWithAggregatesInput | MenuItemsScalarWhereWithAggregatesInput[]
    OR?: MenuItemsScalarWhereWithAggregatesInput[]
    NOT?: MenuItemsScalarWhereWithAggregatesInput | MenuItemsScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"MenuItems"> | number
    itemName?: StringWithAggregatesFilter<"MenuItems"> | string
    restId?: IntWithAggregatesFilter<"MenuItems"> | number
    itemPrice?: DecimalWithAggregatesFilter<"MenuItems"> | Decimal | DecimalJsLike | number | string
    itemDescription?: StringWithAggregatesFilter<"MenuItems"> | string
    itemSweet?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    itemSpicy?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    itemSweetLevel?: IntWithAggregatesFilter<"MenuItems"> | number
    itemSpiceLevel?: IntWithAggregatesFilter<"MenuItems"> | number
    itemAvailable?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    itemBestSeller?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    itemIsVeg?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    itemIsJain?: BoolWithAggregatesFilter<"MenuItems"> | boolean
  }

  export type MenuItemsCreateInput = {
    itemName: string
    restId: number
    itemPrice: Decimal | DecimalJsLike | number | string
    itemDescription: string
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: number
    itemSpiceLevel?: number
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }

  export type MenuItemsUncheckedCreateInput = {
    itemId?: number
    itemName: string
    restId: number
    itemPrice: Decimal | DecimalJsLike | number | string
    itemDescription: string
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: number
    itemSpiceLevel?: number
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }

  export type MenuItemsUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    restId?: IntFieldUpdateOperationsInput | number
    itemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    itemSweet?: BoolFieldUpdateOperationsInput | boolean
    itemSpicy?: BoolFieldUpdateOperationsInput | boolean
    itemSweetLevel?: IntFieldUpdateOperationsInput | number
    itemSpiceLevel?: IntFieldUpdateOperationsInput | number
    itemAvailable?: BoolFieldUpdateOperationsInput | boolean
    itemBestSeller?: BoolFieldUpdateOperationsInput | boolean
    itemIsVeg?: BoolFieldUpdateOperationsInput | boolean
    itemIsJain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemsUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    restId?: IntFieldUpdateOperationsInput | number
    itemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    itemSweet?: BoolFieldUpdateOperationsInput | boolean
    itemSpicy?: BoolFieldUpdateOperationsInput | boolean
    itemSweetLevel?: IntFieldUpdateOperationsInput | number
    itemSpiceLevel?: IntFieldUpdateOperationsInput | number
    itemAvailable?: BoolFieldUpdateOperationsInput | boolean
    itemBestSeller?: BoolFieldUpdateOperationsInput | boolean
    itemIsVeg?: BoolFieldUpdateOperationsInput | boolean
    itemIsJain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemsCreateManyInput = {
    itemId?: number
    itemName: string
    restId: number
    itemPrice: Decimal | DecimalJsLike | number | string
    itemDescription: string
    itemSweet?: boolean
    itemSpicy?: boolean
    itemSweetLevel?: number
    itemSpiceLevel?: number
    itemAvailable?: boolean
    itemBestSeller?: boolean
    itemIsVeg?: boolean
    itemIsJain?: boolean
  }

  export type MenuItemsUpdateManyMutationInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    restId?: IntFieldUpdateOperationsInput | number
    itemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    itemSweet?: BoolFieldUpdateOperationsInput | boolean
    itemSpicy?: BoolFieldUpdateOperationsInput | boolean
    itemSweetLevel?: IntFieldUpdateOperationsInput | number
    itemSpiceLevel?: IntFieldUpdateOperationsInput | number
    itemAvailable?: BoolFieldUpdateOperationsInput | boolean
    itemBestSeller?: BoolFieldUpdateOperationsInput | boolean
    itemIsVeg?: BoolFieldUpdateOperationsInput | boolean
    itemIsJain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemsUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    restId?: IntFieldUpdateOperationsInput | number
    itemPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    itemSweet?: BoolFieldUpdateOperationsInput | boolean
    itemSpicy?: BoolFieldUpdateOperationsInput | boolean
    itemSweetLevel?: IntFieldUpdateOperationsInput | number
    itemSpiceLevel?: IntFieldUpdateOperationsInput | number
    itemAvailable?: BoolFieldUpdateOperationsInput | boolean
    itemBestSeller?: BoolFieldUpdateOperationsInput | boolean
    itemIsVeg?: BoolFieldUpdateOperationsInput | boolean
    itemIsJain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MenuItemsCountOrderByAggregateInput = {
    itemId?: SortOrder
    itemName?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemDescription?: SortOrder
    itemSweet?: SortOrder
    itemSpicy?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
    itemAvailable?: SortOrder
    itemBestSeller?: SortOrder
    itemIsVeg?: SortOrder
    itemIsJain?: SortOrder
  }

  export type MenuItemsAvgOrderByAggregateInput = {
    itemId?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
  }

  export type MenuItemsMaxOrderByAggregateInput = {
    itemId?: SortOrder
    itemName?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemDescription?: SortOrder
    itemSweet?: SortOrder
    itemSpicy?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
    itemAvailable?: SortOrder
    itemBestSeller?: SortOrder
    itemIsVeg?: SortOrder
    itemIsJain?: SortOrder
  }

  export type MenuItemsMinOrderByAggregateInput = {
    itemId?: SortOrder
    itemName?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemDescription?: SortOrder
    itemSweet?: SortOrder
    itemSpicy?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
    itemAvailable?: SortOrder
    itemBestSeller?: SortOrder
    itemIsVeg?: SortOrder
    itemIsJain?: SortOrder
  }

  export type MenuItemsSumOrderByAggregateInput = {
    itemId?: SortOrder
    restId?: SortOrder
    itemPrice?: SortOrder
    itemSweetLevel?: SortOrder
    itemSpiceLevel?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}