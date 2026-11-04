
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DrawingArtwork
 * 
 */
export type DrawingArtwork = $Result.DefaultSelection<Prisma.$DrawingArtworkPayload>
/**
 * Model FashionDesign
 * 
 */
export type FashionDesign = $Result.DefaultSelection<Prisma.$FashionDesignPayload>
/**
 * Model GameScore
 * 
 */
export type GameScore = $Result.DefaultSelection<Prisma.$GameScorePayload>
/**
 * Model SecretClubBadge
 * 
 */
export type SecretClubBadge = $Result.DefaultSelection<Prisma.$SecretClubBadgePayload>
/**
 * Model VoiceMessage
 * 
 */
export type VoiceMessage = $Result.DefaultSelection<Prisma.$VoiceMessagePayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more DrawingArtworks
 * const drawingArtworks = await prisma.drawingArtwork.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more DrawingArtworks
   * const drawingArtworks = await prisma.drawingArtwork.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drawingArtwork`: Exposes CRUD operations for the **DrawingArtwork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrawingArtworks
    * const drawingArtworks = await prisma.drawingArtwork.findMany()
    * ```
    */
  get drawingArtwork(): Prisma.DrawingArtworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fashionDesign`: Exposes CRUD operations for the **FashionDesign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FashionDesigns
    * const fashionDesigns = await prisma.fashionDesign.findMany()
    * ```
    */
  get fashionDesign(): Prisma.FashionDesignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameScore`: Exposes CRUD operations for the **GameScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameScores
    * const gameScores = await prisma.gameScore.findMany()
    * ```
    */
  get gameScore(): Prisma.GameScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretClubBadge`: Exposes CRUD operations for the **SecretClubBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecretClubBadges
    * const secretClubBadges = await prisma.secretClubBadge.findMany()
    * ```
    */
  get secretClubBadge(): Prisma.SecretClubBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceMessage`: Exposes CRUD operations for the **VoiceMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceMessages
    * const voiceMessages = await prisma.voiceMessage.findMany()
    * ```
    */
  get voiceMessage(): Prisma.VoiceMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    DrawingArtwork: 'DrawingArtwork',
    FashionDesign: 'FashionDesign',
    GameScore: 'GameScore',
    SecretClubBadge: 'SecretClubBadge',
    VoiceMessage: 'VoiceMessage',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "drawingArtwork" | "fashionDesign" | "gameScore" | "secretClubBadge" | "voiceMessage" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DrawingArtwork: {
        payload: Prisma.$DrawingArtworkPayload<ExtArgs>
        fields: Prisma.DrawingArtworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawingArtworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawingArtworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          findFirst: {
            args: Prisma.DrawingArtworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawingArtworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          findMany: {
            args: Prisma.DrawingArtworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>[]
          }
          create: {
            args: Prisma.DrawingArtworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          createMany: {
            args: Prisma.DrawingArtworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawingArtworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>[]
          }
          delete: {
            args: Prisma.DrawingArtworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          update: {
            args: Prisma.DrawingArtworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          deleteMany: {
            args: Prisma.DrawingArtworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawingArtworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawingArtworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>[]
          }
          upsert: {
            args: Prisma.DrawingArtworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingArtworkPayload>
          }
          aggregate: {
            args: Prisma.DrawingArtworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawingArtwork>
          }
          groupBy: {
            args: Prisma.DrawingArtworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawingArtworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawingArtworkCountArgs<ExtArgs>
            result: $Utils.Optional<DrawingArtworkCountAggregateOutputType> | number
          }
        }
      }
      FashionDesign: {
        payload: Prisma.$FashionDesignPayload<ExtArgs>
        fields: Prisma.FashionDesignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FashionDesignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FashionDesignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          findFirst: {
            args: Prisma.FashionDesignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FashionDesignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          findMany: {
            args: Prisma.FashionDesignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>[]
          }
          create: {
            args: Prisma.FashionDesignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          createMany: {
            args: Prisma.FashionDesignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FashionDesignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>[]
          }
          delete: {
            args: Prisma.FashionDesignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          update: {
            args: Prisma.FashionDesignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          deleteMany: {
            args: Prisma.FashionDesignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FashionDesignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FashionDesignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>[]
          }
          upsert: {
            args: Prisma.FashionDesignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FashionDesignPayload>
          }
          aggregate: {
            args: Prisma.FashionDesignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFashionDesign>
          }
          groupBy: {
            args: Prisma.FashionDesignGroupByArgs<ExtArgs>
            result: $Utils.Optional<FashionDesignGroupByOutputType>[]
          }
          count: {
            args: Prisma.FashionDesignCountArgs<ExtArgs>
            result: $Utils.Optional<FashionDesignCountAggregateOutputType> | number
          }
        }
      }
      GameScore: {
        payload: Prisma.$GameScorePayload<ExtArgs>
        fields: Prisma.GameScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findFirst: {
            args: Prisma.GameScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findMany: {
            args: Prisma.GameScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          create: {
            args: Prisma.GameScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          createMany: {
            args: Prisma.GameScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          delete: {
            args: Prisma.GameScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          update: {
            args: Prisma.GameScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          deleteMany: {
            args: Prisma.GameScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          upsert: {
            args: Prisma.GameScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          aggregate: {
            args: Prisma.GameScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameScore>
          }
          groupBy: {
            args: Prisma.GameScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameScoreCountArgs<ExtArgs>
            result: $Utils.Optional<GameScoreCountAggregateOutputType> | number
          }
        }
      }
      SecretClubBadge: {
        payload: Prisma.$SecretClubBadgePayload<ExtArgs>
        fields: Prisma.SecretClubBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretClubBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretClubBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          findFirst: {
            args: Prisma.SecretClubBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretClubBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          findMany: {
            args: Prisma.SecretClubBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>[]
          }
          create: {
            args: Prisma.SecretClubBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          createMany: {
            args: Prisma.SecretClubBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretClubBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>[]
          }
          delete: {
            args: Prisma.SecretClubBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          update: {
            args: Prisma.SecretClubBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          deleteMany: {
            args: Prisma.SecretClubBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretClubBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretClubBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>[]
          }
          upsert: {
            args: Prisma.SecretClubBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubBadgePayload>
          }
          aggregate: {
            args: Prisma.SecretClubBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretClubBadge>
          }
          groupBy: {
            args: Prisma.SecretClubBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretClubBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretClubBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<SecretClubBadgeCountAggregateOutputType> | number
          }
        }
      }
      VoiceMessage: {
        payload: Prisma.$VoiceMessagePayload<ExtArgs>
        fields: Prisma.VoiceMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          findFirst: {
            args: Prisma.VoiceMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          findMany: {
            args: Prisma.VoiceMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>[]
          }
          create: {
            args: Prisma.VoiceMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          createMany: {
            args: Prisma.VoiceMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>[]
          }
          delete: {
            args: Prisma.VoiceMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          update: {
            args: Prisma.VoiceMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          deleteMany: {
            args: Prisma.VoiceMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>[]
          }
          upsert: {
            args: Prisma.VoiceMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceMessagePayload>
          }
          aggregate: {
            args: Prisma.VoiceMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceMessage>
          }
          groupBy: {
            args: Prisma.VoiceMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceMessageCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceMessageCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    drawingArtwork?: DrawingArtworkOmit
    fashionDesign?: FashionDesignOmit
    gameScore?: GameScoreOmit
    secretClubBadge?: SecretClubBadgeOmit
    voiceMessage?: VoiceMessageOmit
    settings?: SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Model DrawingArtwork
   */

  export type AggregateDrawingArtwork = {
    _count: DrawingArtworkCountAggregateOutputType | null
    _avg: DrawingArtworkAvgAggregateOutputType | null
    _sum: DrawingArtworkSumAggregateOutputType | null
    _min: DrawingArtworkMinAggregateOutputType | null
    _max: DrawingArtworkMaxAggregateOutputType | null
  }

  export type DrawingArtworkAvgAggregateOutputType = {
    likesCount: number | null
  }

  export type DrawingArtworkSumAggregateOutputType = {
    likesCount: number | null
  }

  export type DrawingArtworkMinAggregateOutputType = {
    id: string | null
    title: string | null
    artistName: string | null
    imageData: string | null
    likesCount: number | null
    stickers: string | null
    createdAt: Date | null
  }

  export type DrawingArtworkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    artistName: string | null
    imageData: string | null
    likesCount: number | null
    stickers: string | null
    createdAt: Date | null
  }

  export type DrawingArtworkCountAggregateOutputType = {
    id: number
    title: number
    artistName: number
    imageData: number
    likesCount: number
    stickers: number
    createdAt: number
    _all: number
  }


  export type DrawingArtworkAvgAggregateInputType = {
    likesCount?: true
  }

  export type DrawingArtworkSumAggregateInputType = {
    likesCount?: true
  }

  export type DrawingArtworkMinAggregateInputType = {
    id?: true
    title?: true
    artistName?: true
    imageData?: true
    likesCount?: true
    stickers?: true
    createdAt?: true
  }

  export type DrawingArtworkMaxAggregateInputType = {
    id?: true
    title?: true
    artistName?: true
    imageData?: true
    likesCount?: true
    stickers?: true
    createdAt?: true
  }

  export type DrawingArtworkCountAggregateInputType = {
    id?: true
    title?: true
    artistName?: true
    imageData?: true
    likesCount?: true
    stickers?: true
    createdAt?: true
    _all?: true
  }

  export type DrawingArtworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawingArtwork to aggregate.
     */
    where?: DrawingArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawingArtworks to fetch.
     */
    orderBy?: DrawingArtworkOrderByWithRelationInput | DrawingArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawingArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawingArtworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawingArtworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrawingArtworks
    **/
    _count?: true | DrawingArtworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawingArtworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawingArtworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawingArtworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawingArtworkMaxAggregateInputType
  }

  export type GetDrawingArtworkAggregateType<T extends DrawingArtworkAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawingArtwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawingArtwork[P]>
      : GetScalarType<T[P], AggregateDrawingArtwork[P]>
  }




  export type DrawingArtworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingArtworkWhereInput
    orderBy?: DrawingArtworkOrderByWithAggregationInput | DrawingArtworkOrderByWithAggregationInput[]
    by: DrawingArtworkScalarFieldEnum[] | DrawingArtworkScalarFieldEnum
    having?: DrawingArtworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawingArtworkCountAggregateInputType | true
    _avg?: DrawingArtworkAvgAggregateInputType
    _sum?: DrawingArtworkSumAggregateInputType
    _min?: DrawingArtworkMinAggregateInputType
    _max?: DrawingArtworkMaxAggregateInputType
  }

  export type DrawingArtworkGroupByOutputType = {
    id: string
    title: string
    artistName: string
    imageData: string
    likesCount: number
    stickers: string | null
    createdAt: Date
    _count: DrawingArtworkCountAggregateOutputType | null
    _avg: DrawingArtworkAvgAggregateOutputType | null
    _sum: DrawingArtworkSumAggregateOutputType | null
    _min: DrawingArtworkMinAggregateOutputType | null
    _max: DrawingArtworkMaxAggregateOutputType | null
  }

  type GetDrawingArtworkGroupByPayload<T extends DrawingArtworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawingArtworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawingArtworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawingArtworkGroupByOutputType[P]>
            : GetScalarType<T[P], DrawingArtworkGroupByOutputType[P]>
        }
      >
    >


  export type DrawingArtworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artistName?: boolean
    imageData?: boolean
    likesCount?: boolean
    stickers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["drawingArtwork"]>

  export type DrawingArtworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artistName?: boolean
    imageData?: boolean
    likesCount?: boolean
    stickers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["drawingArtwork"]>

  export type DrawingArtworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artistName?: boolean
    imageData?: boolean
    likesCount?: boolean
    stickers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["drawingArtwork"]>

  export type DrawingArtworkSelectScalar = {
    id?: boolean
    title?: boolean
    artistName?: boolean
    imageData?: boolean
    likesCount?: boolean
    stickers?: boolean
    createdAt?: boolean
  }

  export type DrawingArtworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artistName" | "imageData" | "likesCount" | "stickers" | "createdAt", ExtArgs["result"]["drawingArtwork"]>

  export type $DrawingArtworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrawingArtwork"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      artistName: string
      imageData: string
      likesCount: number
      stickers: string | null
      createdAt: Date
    }, ExtArgs["result"]["drawingArtwork"]>
    composites: {}
  }

  type DrawingArtworkGetPayload<S extends boolean | null | undefined | DrawingArtworkDefaultArgs> = $Result.GetResult<Prisma.$DrawingArtworkPayload, S>

  type DrawingArtworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawingArtworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawingArtworkCountAggregateInputType | true
    }

  export interface DrawingArtworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrawingArtwork'], meta: { name: 'DrawingArtwork' } }
    /**
     * Find zero or one DrawingArtwork that matches the filter.
     * @param {DrawingArtworkFindUniqueArgs} args - Arguments to find a DrawingArtwork
     * @example
     * // Get one DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawingArtworkFindUniqueArgs>(args: SelectSubset<T, DrawingArtworkFindUniqueArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrawingArtwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawingArtworkFindUniqueOrThrowArgs} args - Arguments to find a DrawingArtwork
     * @example
     * // Get one DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawingArtworkFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawingArtworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawingArtwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkFindFirstArgs} args - Arguments to find a DrawingArtwork
     * @example
     * // Get one DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawingArtworkFindFirstArgs>(args?: SelectSubset<T, DrawingArtworkFindFirstArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawingArtwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkFindFirstOrThrowArgs} args - Arguments to find a DrawingArtwork
     * @example
     * // Get one DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawingArtworkFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawingArtworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrawingArtworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrawingArtworks
     * const drawingArtworks = await prisma.drawingArtwork.findMany()
     * 
     * // Get first 10 DrawingArtworks
     * const drawingArtworks = await prisma.drawingArtwork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawingArtworkWithIdOnly = await prisma.drawingArtwork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawingArtworkFindManyArgs>(args?: SelectSubset<T, DrawingArtworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrawingArtwork.
     * @param {DrawingArtworkCreateArgs} args - Arguments to create a DrawingArtwork.
     * @example
     * // Create one DrawingArtwork
     * const DrawingArtwork = await prisma.drawingArtwork.create({
     *   data: {
     *     // ... data to create a DrawingArtwork
     *   }
     * })
     * 
     */
    create<T extends DrawingArtworkCreateArgs>(args: SelectSubset<T, DrawingArtworkCreateArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrawingArtworks.
     * @param {DrawingArtworkCreateManyArgs} args - Arguments to create many DrawingArtworks.
     * @example
     * // Create many DrawingArtworks
     * const drawingArtwork = await prisma.drawingArtwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawingArtworkCreateManyArgs>(args?: SelectSubset<T, DrawingArtworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrawingArtworks and returns the data saved in the database.
     * @param {DrawingArtworkCreateManyAndReturnArgs} args - Arguments to create many DrawingArtworks.
     * @example
     * // Create many DrawingArtworks
     * const drawingArtwork = await prisma.drawingArtwork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrawingArtworks and only return the `id`
     * const drawingArtworkWithIdOnly = await prisma.drawingArtwork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawingArtworkCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawingArtworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrawingArtwork.
     * @param {DrawingArtworkDeleteArgs} args - Arguments to delete one DrawingArtwork.
     * @example
     * // Delete one DrawingArtwork
     * const DrawingArtwork = await prisma.drawingArtwork.delete({
     *   where: {
     *     // ... filter to delete one DrawingArtwork
     *   }
     * })
     * 
     */
    delete<T extends DrawingArtworkDeleteArgs>(args: SelectSubset<T, DrawingArtworkDeleteArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrawingArtwork.
     * @param {DrawingArtworkUpdateArgs} args - Arguments to update one DrawingArtwork.
     * @example
     * // Update one DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawingArtworkUpdateArgs>(args: SelectSubset<T, DrawingArtworkUpdateArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrawingArtworks.
     * @param {DrawingArtworkDeleteManyArgs} args - Arguments to filter DrawingArtworks to delete.
     * @example
     * // Delete a few DrawingArtworks
     * const { count } = await prisma.drawingArtwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawingArtworkDeleteManyArgs>(args?: SelectSubset<T, DrawingArtworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawingArtworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrawingArtworks
     * const drawingArtwork = await prisma.drawingArtwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawingArtworkUpdateManyArgs>(args: SelectSubset<T, DrawingArtworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawingArtworks and returns the data updated in the database.
     * @param {DrawingArtworkUpdateManyAndReturnArgs} args - Arguments to update many DrawingArtworks.
     * @example
     * // Update many DrawingArtworks
     * const drawingArtwork = await prisma.drawingArtwork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrawingArtworks and only return the `id`
     * const drawingArtworkWithIdOnly = await prisma.drawingArtwork.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DrawingArtworkUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawingArtworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrawingArtwork.
     * @param {DrawingArtworkUpsertArgs} args - Arguments to update or create a DrawingArtwork.
     * @example
     * // Update or create a DrawingArtwork
     * const drawingArtwork = await prisma.drawingArtwork.upsert({
     *   create: {
     *     // ... data to create a DrawingArtwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrawingArtwork we want to update
     *   }
     * })
     */
    upsert<T extends DrawingArtworkUpsertArgs>(args: SelectSubset<T, DrawingArtworkUpsertArgs<ExtArgs>>): Prisma__DrawingArtworkClient<$Result.GetResult<Prisma.$DrawingArtworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrawingArtworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkCountArgs} args - Arguments to filter DrawingArtworks to count.
     * @example
     * // Count the number of DrawingArtworks
     * const count = await prisma.drawingArtwork.count({
     *   where: {
     *     // ... the filter for the DrawingArtworks we want to count
     *   }
     * })
    **/
    count<T extends DrawingArtworkCountArgs>(
      args?: Subset<T, DrawingArtworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawingArtworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrawingArtwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawingArtworkAggregateArgs>(args: Subset<T, DrawingArtworkAggregateArgs>): Prisma.PrismaPromise<GetDrawingArtworkAggregateType<T>>

    /**
     * Group by DrawingArtwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingArtworkGroupByArgs} args - Group by arguments.
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
      T extends DrawingArtworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawingArtworkGroupByArgs['orderBy'] }
        : { orderBy?: DrawingArtworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawingArtworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawingArtworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrawingArtwork model
   */
  readonly fields: DrawingArtworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrawingArtwork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawingArtworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DrawingArtwork model
   */
  interface DrawingArtworkFieldRefs {
    readonly id: FieldRef<"DrawingArtwork", 'String'>
    readonly title: FieldRef<"DrawingArtwork", 'String'>
    readonly artistName: FieldRef<"DrawingArtwork", 'String'>
    readonly imageData: FieldRef<"DrawingArtwork", 'String'>
    readonly likesCount: FieldRef<"DrawingArtwork", 'Int'>
    readonly stickers: FieldRef<"DrawingArtwork", 'String'>
    readonly createdAt: FieldRef<"DrawingArtwork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrawingArtwork findUnique
   */
  export type DrawingArtworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter, which DrawingArtwork to fetch.
     */
    where: DrawingArtworkWhereUniqueInput
  }

  /**
   * DrawingArtwork findUniqueOrThrow
   */
  export type DrawingArtworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter, which DrawingArtwork to fetch.
     */
    where: DrawingArtworkWhereUniqueInput
  }

  /**
   * DrawingArtwork findFirst
   */
  export type DrawingArtworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter, which DrawingArtwork to fetch.
     */
    where?: DrawingArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawingArtworks to fetch.
     */
    orderBy?: DrawingArtworkOrderByWithRelationInput | DrawingArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawingArtworks.
     */
    cursor?: DrawingArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawingArtworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawingArtworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawingArtworks.
     */
    distinct?: DrawingArtworkScalarFieldEnum | DrawingArtworkScalarFieldEnum[]
  }

  /**
   * DrawingArtwork findFirstOrThrow
   */
  export type DrawingArtworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter, which DrawingArtwork to fetch.
     */
    where?: DrawingArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawingArtworks to fetch.
     */
    orderBy?: DrawingArtworkOrderByWithRelationInput | DrawingArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawingArtworks.
     */
    cursor?: DrawingArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawingArtworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawingArtworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawingArtworks.
     */
    distinct?: DrawingArtworkScalarFieldEnum | DrawingArtworkScalarFieldEnum[]
  }

  /**
   * DrawingArtwork findMany
   */
  export type DrawingArtworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter, which DrawingArtworks to fetch.
     */
    where?: DrawingArtworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawingArtworks to fetch.
     */
    orderBy?: DrawingArtworkOrderByWithRelationInput | DrawingArtworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrawingArtworks.
     */
    cursor?: DrawingArtworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawingArtworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawingArtworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawingArtworks.
     */
    distinct?: DrawingArtworkScalarFieldEnum | DrawingArtworkScalarFieldEnum[]
  }

  /**
   * DrawingArtwork create
   */
  export type DrawingArtworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * The data needed to create a DrawingArtwork.
     */
    data: XOR<DrawingArtworkCreateInput, DrawingArtworkUncheckedCreateInput>
  }

  /**
   * DrawingArtwork createMany
   */
  export type DrawingArtworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrawingArtworks.
     */
    data: DrawingArtworkCreateManyInput | DrawingArtworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrawingArtwork createManyAndReturn
   */
  export type DrawingArtworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * The data used to create many DrawingArtworks.
     */
    data: DrawingArtworkCreateManyInput | DrawingArtworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrawingArtwork update
   */
  export type DrawingArtworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * The data needed to update a DrawingArtwork.
     */
    data: XOR<DrawingArtworkUpdateInput, DrawingArtworkUncheckedUpdateInput>
    /**
     * Choose, which DrawingArtwork to update.
     */
    where: DrawingArtworkWhereUniqueInput
  }

  /**
   * DrawingArtwork updateMany
   */
  export type DrawingArtworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrawingArtworks.
     */
    data: XOR<DrawingArtworkUpdateManyMutationInput, DrawingArtworkUncheckedUpdateManyInput>
    /**
     * Filter which DrawingArtworks to update
     */
    where?: DrawingArtworkWhereInput
    /**
     * Limit how many DrawingArtworks to update.
     */
    limit?: number
  }

  /**
   * DrawingArtwork updateManyAndReturn
   */
  export type DrawingArtworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * The data used to update DrawingArtworks.
     */
    data: XOR<DrawingArtworkUpdateManyMutationInput, DrawingArtworkUncheckedUpdateManyInput>
    /**
     * Filter which DrawingArtworks to update
     */
    where?: DrawingArtworkWhereInput
    /**
     * Limit how many DrawingArtworks to update.
     */
    limit?: number
  }

  /**
   * DrawingArtwork upsert
   */
  export type DrawingArtworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * The filter to search for the DrawingArtwork to update in case it exists.
     */
    where: DrawingArtworkWhereUniqueInput
    /**
     * In case the DrawingArtwork found by the `where` argument doesn't exist, create a new DrawingArtwork with this data.
     */
    create: XOR<DrawingArtworkCreateInput, DrawingArtworkUncheckedCreateInput>
    /**
     * In case the DrawingArtwork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawingArtworkUpdateInput, DrawingArtworkUncheckedUpdateInput>
  }

  /**
   * DrawingArtwork delete
   */
  export type DrawingArtworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
    /**
     * Filter which DrawingArtwork to delete.
     */
    where: DrawingArtworkWhereUniqueInput
  }

  /**
   * DrawingArtwork deleteMany
   */
  export type DrawingArtworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawingArtworks to delete
     */
    where?: DrawingArtworkWhereInput
    /**
     * Limit how many DrawingArtworks to delete.
     */
    limit?: number
  }

  /**
   * DrawingArtwork without action
   */
  export type DrawingArtworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingArtwork
     */
    select?: DrawingArtworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawingArtwork
     */
    omit?: DrawingArtworkOmit<ExtArgs> | null
  }


  /**
   * Model FashionDesign
   */

  export type AggregateFashionDesign = {
    _count: FashionDesignCountAggregateOutputType | null
    _min: FashionDesignMinAggregateOutputType | null
    _max: FashionDesignMaxAggregateOutputType | null
  }

  export type FashionDesignMinAggregateOutputType = {
    id: string | null
    title: string | null
    dressStyle: string | null
    hairStyle: string | null
    crown: string | null
    wings: string | null
    accessory: string | null
    background: string | null
    previewData: string | null
    createdAt: Date | null
  }

  export type FashionDesignMaxAggregateOutputType = {
    id: string | null
    title: string | null
    dressStyle: string | null
    hairStyle: string | null
    crown: string | null
    wings: string | null
    accessory: string | null
    background: string | null
    previewData: string | null
    createdAt: Date | null
  }

  export type FashionDesignCountAggregateOutputType = {
    id: number
    title: number
    dressStyle: number
    hairStyle: number
    crown: number
    wings: number
    accessory: number
    background: number
    previewData: number
    createdAt: number
    _all: number
  }


  export type FashionDesignMinAggregateInputType = {
    id?: true
    title?: true
    dressStyle?: true
    hairStyle?: true
    crown?: true
    wings?: true
    accessory?: true
    background?: true
    previewData?: true
    createdAt?: true
  }

  export type FashionDesignMaxAggregateInputType = {
    id?: true
    title?: true
    dressStyle?: true
    hairStyle?: true
    crown?: true
    wings?: true
    accessory?: true
    background?: true
    previewData?: true
    createdAt?: true
  }

  export type FashionDesignCountAggregateInputType = {
    id?: true
    title?: true
    dressStyle?: true
    hairStyle?: true
    crown?: true
    wings?: true
    accessory?: true
    background?: true
    previewData?: true
    createdAt?: true
    _all?: true
  }

  export type FashionDesignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FashionDesign to aggregate.
     */
    where?: FashionDesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FashionDesigns to fetch.
     */
    orderBy?: FashionDesignOrderByWithRelationInput | FashionDesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FashionDesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FashionDesigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FashionDesigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FashionDesigns
    **/
    _count?: true | FashionDesignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FashionDesignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FashionDesignMaxAggregateInputType
  }

  export type GetFashionDesignAggregateType<T extends FashionDesignAggregateArgs> = {
        [P in keyof T & keyof AggregateFashionDesign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFashionDesign[P]>
      : GetScalarType<T[P], AggregateFashionDesign[P]>
  }




  export type FashionDesignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FashionDesignWhereInput
    orderBy?: FashionDesignOrderByWithAggregationInput | FashionDesignOrderByWithAggregationInput[]
    by: FashionDesignScalarFieldEnum[] | FashionDesignScalarFieldEnum
    having?: FashionDesignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FashionDesignCountAggregateInputType | true
    _min?: FashionDesignMinAggregateInputType
    _max?: FashionDesignMaxAggregateInputType
  }

  export type FashionDesignGroupByOutputType = {
    id: string
    title: string
    dressStyle: string
    hairStyle: string
    crown: string
    wings: string | null
    accessory: string | null
    background: string
    previewData: string | null
    createdAt: Date
    _count: FashionDesignCountAggregateOutputType | null
    _min: FashionDesignMinAggregateOutputType | null
    _max: FashionDesignMaxAggregateOutputType | null
  }

  type GetFashionDesignGroupByPayload<T extends FashionDesignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FashionDesignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FashionDesignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FashionDesignGroupByOutputType[P]>
            : GetScalarType<T[P], FashionDesignGroupByOutputType[P]>
        }
      >
    >


  export type FashionDesignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dressStyle?: boolean
    hairStyle?: boolean
    crown?: boolean
    wings?: boolean
    accessory?: boolean
    background?: boolean
    previewData?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fashionDesign"]>

  export type FashionDesignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dressStyle?: boolean
    hairStyle?: boolean
    crown?: boolean
    wings?: boolean
    accessory?: boolean
    background?: boolean
    previewData?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fashionDesign"]>

  export type FashionDesignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dressStyle?: boolean
    hairStyle?: boolean
    crown?: boolean
    wings?: boolean
    accessory?: boolean
    background?: boolean
    previewData?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fashionDesign"]>

  export type FashionDesignSelectScalar = {
    id?: boolean
    title?: boolean
    dressStyle?: boolean
    hairStyle?: boolean
    crown?: boolean
    wings?: boolean
    accessory?: boolean
    background?: boolean
    previewData?: boolean
    createdAt?: boolean
  }

  export type FashionDesignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "dressStyle" | "hairStyle" | "crown" | "wings" | "accessory" | "background" | "previewData" | "createdAt", ExtArgs["result"]["fashionDesign"]>

  export type $FashionDesignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FashionDesign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      dressStyle: string
      hairStyle: string
      crown: string
      wings: string | null
      accessory: string | null
      background: string
      previewData: string | null
      createdAt: Date
    }, ExtArgs["result"]["fashionDesign"]>
    composites: {}
  }

  type FashionDesignGetPayload<S extends boolean | null | undefined | FashionDesignDefaultArgs> = $Result.GetResult<Prisma.$FashionDesignPayload, S>

  type FashionDesignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FashionDesignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FashionDesignCountAggregateInputType | true
    }

  export interface FashionDesignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FashionDesign'], meta: { name: 'FashionDesign' } }
    /**
     * Find zero or one FashionDesign that matches the filter.
     * @param {FashionDesignFindUniqueArgs} args - Arguments to find a FashionDesign
     * @example
     * // Get one FashionDesign
     * const fashionDesign = await prisma.fashionDesign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FashionDesignFindUniqueArgs>(args: SelectSubset<T, FashionDesignFindUniqueArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FashionDesign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FashionDesignFindUniqueOrThrowArgs} args - Arguments to find a FashionDesign
     * @example
     * // Get one FashionDesign
     * const fashionDesign = await prisma.fashionDesign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FashionDesignFindUniqueOrThrowArgs>(args: SelectSubset<T, FashionDesignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FashionDesign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignFindFirstArgs} args - Arguments to find a FashionDesign
     * @example
     * // Get one FashionDesign
     * const fashionDesign = await prisma.fashionDesign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FashionDesignFindFirstArgs>(args?: SelectSubset<T, FashionDesignFindFirstArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FashionDesign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignFindFirstOrThrowArgs} args - Arguments to find a FashionDesign
     * @example
     * // Get one FashionDesign
     * const fashionDesign = await prisma.fashionDesign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FashionDesignFindFirstOrThrowArgs>(args?: SelectSubset<T, FashionDesignFindFirstOrThrowArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FashionDesigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FashionDesigns
     * const fashionDesigns = await prisma.fashionDesign.findMany()
     * 
     * // Get first 10 FashionDesigns
     * const fashionDesigns = await prisma.fashionDesign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fashionDesignWithIdOnly = await prisma.fashionDesign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FashionDesignFindManyArgs>(args?: SelectSubset<T, FashionDesignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FashionDesign.
     * @param {FashionDesignCreateArgs} args - Arguments to create a FashionDesign.
     * @example
     * // Create one FashionDesign
     * const FashionDesign = await prisma.fashionDesign.create({
     *   data: {
     *     // ... data to create a FashionDesign
     *   }
     * })
     * 
     */
    create<T extends FashionDesignCreateArgs>(args: SelectSubset<T, FashionDesignCreateArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FashionDesigns.
     * @param {FashionDesignCreateManyArgs} args - Arguments to create many FashionDesigns.
     * @example
     * // Create many FashionDesigns
     * const fashionDesign = await prisma.fashionDesign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FashionDesignCreateManyArgs>(args?: SelectSubset<T, FashionDesignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FashionDesigns and returns the data saved in the database.
     * @param {FashionDesignCreateManyAndReturnArgs} args - Arguments to create many FashionDesigns.
     * @example
     * // Create many FashionDesigns
     * const fashionDesign = await prisma.fashionDesign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FashionDesigns and only return the `id`
     * const fashionDesignWithIdOnly = await prisma.fashionDesign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FashionDesignCreateManyAndReturnArgs>(args?: SelectSubset<T, FashionDesignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FashionDesign.
     * @param {FashionDesignDeleteArgs} args - Arguments to delete one FashionDesign.
     * @example
     * // Delete one FashionDesign
     * const FashionDesign = await prisma.fashionDesign.delete({
     *   where: {
     *     // ... filter to delete one FashionDesign
     *   }
     * })
     * 
     */
    delete<T extends FashionDesignDeleteArgs>(args: SelectSubset<T, FashionDesignDeleteArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FashionDesign.
     * @param {FashionDesignUpdateArgs} args - Arguments to update one FashionDesign.
     * @example
     * // Update one FashionDesign
     * const fashionDesign = await prisma.fashionDesign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FashionDesignUpdateArgs>(args: SelectSubset<T, FashionDesignUpdateArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FashionDesigns.
     * @param {FashionDesignDeleteManyArgs} args - Arguments to filter FashionDesigns to delete.
     * @example
     * // Delete a few FashionDesigns
     * const { count } = await prisma.fashionDesign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FashionDesignDeleteManyArgs>(args?: SelectSubset<T, FashionDesignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FashionDesigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FashionDesigns
     * const fashionDesign = await prisma.fashionDesign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FashionDesignUpdateManyArgs>(args: SelectSubset<T, FashionDesignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FashionDesigns and returns the data updated in the database.
     * @param {FashionDesignUpdateManyAndReturnArgs} args - Arguments to update many FashionDesigns.
     * @example
     * // Update many FashionDesigns
     * const fashionDesign = await prisma.fashionDesign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FashionDesigns and only return the `id`
     * const fashionDesignWithIdOnly = await prisma.fashionDesign.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FashionDesignUpdateManyAndReturnArgs>(args: SelectSubset<T, FashionDesignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FashionDesign.
     * @param {FashionDesignUpsertArgs} args - Arguments to update or create a FashionDesign.
     * @example
     * // Update or create a FashionDesign
     * const fashionDesign = await prisma.fashionDesign.upsert({
     *   create: {
     *     // ... data to create a FashionDesign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FashionDesign we want to update
     *   }
     * })
     */
    upsert<T extends FashionDesignUpsertArgs>(args: SelectSubset<T, FashionDesignUpsertArgs<ExtArgs>>): Prisma__FashionDesignClient<$Result.GetResult<Prisma.$FashionDesignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FashionDesigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignCountArgs} args - Arguments to filter FashionDesigns to count.
     * @example
     * // Count the number of FashionDesigns
     * const count = await prisma.fashionDesign.count({
     *   where: {
     *     // ... the filter for the FashionDesigns we want to count
     *   }
     * })
    **/
    count<T extends FashionDesignCountArgs>(
      args?: Subset<T, FashionDesignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FashionDesignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FashionDesign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FashionDesignAggregateArgs>(args: Subset<T, FashionDesignAggregateArgs>): Prisma.PrismaPromise<GetFashionDesignAggregateType<T>>

    /**
     * Group by FashionDesign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FashionDesignGroupByArgs} args - Group by arguments.
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
      T extends FashionDesignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FashionDesignGroupByArgs['orderBy'] }
        : { orderBy?: FashionDesignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FashionDesignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFashionDesignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FashionDesign model
   */
  readonly fields: FashionDesignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FashionDesign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FashionDesignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FashionDesign model
   */
  interface FashionDesignFieldRefs {
    readonly id: FieldRef<"FashionDesign", 'String'>
    readonly title: FieldRef<"FashionDesign", 'String'>
    readonly dressStyle: FieldRef<"FashionDesign", 'String'>
    readonly hairStyle: FieldRef<"FashionDesign", 'String'>
    readonly crown: FieldRef<"FashionDesign", 'String'>
    readonly wings: FieldRef<"FashionDesign", 'String'>
    readonly accessory: FieldRef<"FashionDesign", 'String'>
    readonly background: FieldRef<"FashionDesign", 'String'>
    readonly previewData: FieldRef<"FashionDesign", 'String'>
    readonly createdAt: FieldRef<"FashionDesign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FashionDesign findUnique
   */
  export type FashionDesignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter, which FashionDesign to fetch.
     */
    where: FashionDesignWhereUniqueInput
  }

  /**
   * FashionDesign findUniqueOrThrow
   */
  export type FashionDesignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter, which FashionDesign to fetch.
     */
    where: FashionDesignWhereUniqueInput
  }

  /**
   * FashionDesign findFirst
   */
  export type FashionDesignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter, which FashionDesign to fetch.
     */
    where?: FashionDesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FashionDesigns to fetch.
     */
    orderBy?: FashionDesignOrderByWithRelationInput | FashionDesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FashionDesigns.
     */
    cursor?: FashionDesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FashionDesigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FashionDesigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FashionDesigns.
     */
    distinct?: FashionDesignScalarFieldEnum | FashionDesignScalarFieldEnum[]
  }

  /**
   * FashionDesign findFirstOrThrow
   */
  export type FashionDesignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter, which FashionDesign to fetch.
     */
    where?: FashionDesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FashionDesigns to fetch.
     */
    orderBy?: FashionDesignOrderByWithRelationInput | FashionDesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FashionDesigns.
     */
    cursor?: FashionDesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FashionDesigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FashionDesigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FashionDesigns.
     */
    distinct?: FashionDesignScalarFieldEnum | FashionDesignScalarFieldEnum[]
  }

  /**
   * FashionDesign findMany
   */
  export type FashionDesignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter, which FashionDesigns to fetch.
     */
    where?: FashionDesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FashionDesigns to fetch.
     */
    orderBy?: FashionDesignOrderByWithRelationInput | FashionDesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FashionDesigns.
     */
    cursor?: FashionDesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FashionDesigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FashionDesigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FashionDesigns.
     */
    distinct?: FashionDesignScalarFieldEnum | FashionDesignScalarFieldEnum[]
  }

  /**
   * FashionDesign create
   */
  export type FashionDesignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * The data needed to create a FashionDesign.
     */
    data: XOR<FashionDesignCreateInput, FashionDesignUncheckedCreateInput>
  }

  /**
   * FashionDesign createMany
   */
  export type FashionDesignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FashionDesigns.
     */
    data: FashionDesignCreateManyInput | FashionDesignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FashionDesign createManyAndReturn
   */
  export type FashionDesignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * The data used to create many FashionDesigns.
     */
    data: FashionDesignCreateManyInput | FashionDesignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FashionDesign update
   */
  export type FashionDesignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * The data needed to update a FashionDesign.
     */
    data: XOR<FashionDesignUpdateInput, FashionDesignUncheckedUpdateInput>
    /**
     * Choose, which FashionDesign to update.
     */
    where: FashionDesignWhereUniqueInput
  }

  /**
   * FashionDesign updateMany
   */
  export type FashionDesignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FashionDesigns.
     */
    data: XOR<FashionDesignUpdateManyMutationInput, FashionDesignUncheckedUpdateManyInput>
    /**
     * Filter which FashionDesigns to update
     */
    where?: FashionDesignWhereInput
    /**
     * Limit how many FashionDesigns to update.
     */
    limit?: number
  }

  /**
   * FashionDesign updateManyAndReturn
   */
  export type FashionDesignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * The data used to update FashionDesigns.
     */
    data: XOR<FashionDesignUpdateManyMutationInput, FashionDesignUncheckedUpdateManyInput>
    /**
     * Filter which FashionDesigns to update
     */
    where?: FashionDesignWhereInput
    /**
     * Limit how many FashionDesigns to update.
     */
    limit?: number
  }

  /**
   * FashionDesign upsert
   */
  export type FashionDesignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * The filter to search for the FashionDesign to update in case it exists.
     */
    where: FashionDesignWhereUniqueInput
    /**
     * In case the FashionDesign found by the `where` argument doesn't exist, create a new FashionDesign with this data.
     */
    create: XOR<FashionDesignCreateInput, FashionDesignUncheckedCreateInput>
    /**
     * In case the FashionDesign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FashionDesignUpdateInput, FashionDesignUncheckedUpdateInput>
  }

  /**
   * FashionDesign delete
   */
  export type FashionDesignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
    /**
     * Filter which FashionDesign to delete.
     */
    where: FashionDesignWhereUniqueInput
  }

  /**
   * FashionDesign deleteMany
   */
  export type FashionDesignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FashionDesigns to delete
     */
    where?: FashionDesignWhereInput
    /**
     * Limit how many FashionDesigns to delete.
     */
    limit?: number
  }

  /**
   * FashionDesign without action
   */
  export type FashionDesignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FashionDesign
     */
    select?: FashionDesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FashionDesign
     */
    omit?: FashionDesignOmit<ExtArgs> | null
  }


  /**
   * Model GameScore
   */

  export type AggregateGameScore = {
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  export type GameScoreAvgAggregateOutputType = {
    score: number | null
    stars: number | null
    level: number | null
  }

  export type GameScoreSumAggregateOutputType = {
    score: number | null
    stars: number | null
    level: number | null
  }

  export type GameScoreMinAggregateOutputType = {
    id: string | null
    playerName: string | null
    gameType: string | null
    score: number | null
    stars: number | null
    level: number | null
    createdAt: Date | null
  }

  export type GameScoreMaxAggregateOutputType = {
    id: string | null
    playerName: string | null
    gameType: string | null
    score: number | null
    stars: number | null
    level: number | null
    createdAt: Date | null
  }

  export type GameScoreCountAggregateOutputType = {
    id: number
    playerName: number
    gameType: number
    score: number
    stars: number
    level: number
    createdAt: number
    _all: number
  }


  export type GameScoreAvgAggregateInputType = {
    score?: true
    stars?: true
    level?: true
  }

  export type GameScoreSumAggregateInputType = {
    score?: true
    stars?: true
    level?: true
  }

  export type GameScoreMinAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    createdAt?: true
  }

  export type GameScoreMaxAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    createdAt?: true
  }

  export type GameScoreCountAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type GameScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScore to aggregate.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameScores
    **/
    _count?: true | GameScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameScoreMaxAggregateInputType
  }

  export type GetGameScoreAggregateType<T extends GameScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateGameScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameScore[P]>
      : GetScalarType<T[P], AggregateGameScore[P]>
  }




  export type GameScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoreWhereInput
    orderBy?: GameScoreOrderByWithAggregationInput | GameScoreOrderByWithAggregationInput[]
    by: GameScoreScalarFieldEnum[] | GameScoreScalarFieldEnum
    having?: GameScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameScoreCountAggregateInputType | true
    _avg?: GameScoreAvgAggregateInputType
    _sum?: GameScoreSumAggregateInputType
    _min?: GameScoreMinAggregateInputType
    _max?: GameScoreMaxAggregateInputType
  }

  export type GameScoreGroupByOutputType = {
    id: string
    playerName: string
    gameType: string
    score: number
    stars: number
    level: number
    createdAt: Date
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  type GetGameScoreGroupByPayload<T extends GameScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
            : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
        }
      >
    >


  export type GameScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectScalar = {
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type GameScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerName" | "gameType" | "score" | "stars" | "level" | "createdAt", ExtArgs["result"]["gameScore"]>

  export type $GameScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerName: string
      gameType: string
      score: number
      stars: number
      level: number
      createdAt: Date
    }, ExtArgs["result"]["gameScore"]>
    composites: {}
  }

  type GameScoreGetPayload<S extends boolean | null | undefined | GameScoreDefaultArgs> = $Result.GetResult<Prisma.$GameScorePayload, S>

  type GameScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameScoreCountAggregateInputType | true
    }

  export interface GameScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameScore'], meta: { name: 'GameScore' } }
    /**
     * Find zero or one GameScore that matches the filter.
     * @param {GameScoreFindUniqueArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameScoreFindUniqueArgs>(args: SelectSubset<T, GameScoreFindUniqueArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameScoreFindUniqueOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, GameScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameScoreFindFirstArgs>(args?: SelectSubset<T, GameScoreFindFirstArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, GameScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameScores
     * const gameScores = await prisma.gameScore.findMany()
     * 
     * // Get first 10 GameScores
     * const gameScores = await prisma.gameScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameScoreFindManyArgs>(args?: SelectSubset<T, GameScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameScore.
     * @param {GameScoreCreateArgs} args - Arguments to create a GameScore.
     * @example
     * // Create one GameScore
     * const GameScore = await prisma.gameScore.create({
     *   data: {
     *     // ... data to create a GameScore
     *   }
     * })
     * 
     */
    create<T extends GameScoreCreateArgs>(args: SelectSubset<T, GameScoreCreateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameScores.
     * @param {GameScoreCreateManyArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameScoreCreateManyArgs>(args?: SelectSubset<T, GameScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameScores and returns the data saved in the database.
     * @param {GameScoreCreateManyAndReturnArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, GameScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameScore.
     * @param {GameScoreDeleteArgs} args - Arguments to delete one GameScore.
     * @example
     * // Delete one GameScore
     * const GameScore = await prisma.gameScore.delete({
     *   where: {
     *     // ... filter to delete one GameScore
     *   }
     * })
     * 
     */
    delete<T extends GameScoreDeleteArgs>(args: SelectSubset<T, GameScoreDeleteArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameScore.
     * @param {GameScoreUpdateArgs} args - Arguments to update one GameScore.
     * @example
     * // Update one GameScore
     * const gameScore = await prisma.gameScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameScoreUpdateArgs>(args: SelectSubset<T, GameScoreUpdateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameScores.
     * @param {GameScoreDeleteManyArgs} args - Arguments to filter GameScores to delete.
     * @example
     * // Delete a few GameScores
     * const { count } = await prisma.gameScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameScoreDeleteManyArgs>(args?: SelectSubset<T, GameScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameScoreUpdateManyArgs>(args: SelectSubset<T, GameScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores and returns the data updated in the database.
     * @param {GameScoreUpdateManyAndReturnArgs} args - Arguments to update many GameScores.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends GameScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, GameScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameScore.
     * @param {GameScoreUpsertArgs} args - Arguments to update or create a GameScore.
     * @example
     * // Update or create a GameScore
     * const gameScore = await prisma.gameScore.upsert({
     *   create: {
     *     // ... data to create a GameScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameScore we want to update
     *   }
     * })
     */
    upsert<T extends GameScoreUpsertArgs>(args: SelectSubset<T, GameScoreUpsertArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreCountArgs} args - Arguments to filter GameScores to count.
     * @example
     * // Count the number of GameScores
     * const count = await prisma.gameScore.count({
     *   where: {
     *     // ... the filter for the GameScores we want to count
     *   }
     * })
    **/
    count<T extends GameScoreCountArgs>(
      args?: Subset<T, GameScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameScoreAggregateArgs>(args: Subset<T, GameScoreAggregateArgs>): Prisma.PrismaPromise<GetGameScoreAggregateType<T>>

    /**
     * Group by GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreGroupByArgs} args - Group by arguments.
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
      T extends GameScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameScoreGroupByArgs['orderBy'] }
        : { orderBy?: GameScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameScore model
   */
  readonly fields: GameScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GameScore model
   */
  interface GameScoreFieldRefs {
    readonly id: FieldRef<"GameScore", 'String'>
    readonly playerName: FieldRef<"GameScore", 'String'>
    readonly gameType: FieldRef<"GameScore", 'String'>
    readonly score: FieldRef<"GameScore", 'Int'>
    readonly stars: FieldRef<"GameScore", 'Int'>
    readonly level: FieldRef<"GameScore", 'Int'>
    readonly createdAt: FieldRef<"GameScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameScore findUnique
   */
  export type GameScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findUniqueOrThrow
   */
  export type GameScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findFirst
   */
  export type GameScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findFirstOrThrow
   */
  export type GameScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findMany
   */
  export type GameScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore create
   */
  export type GameScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data needed to create a GameScore.
     */
    data: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
  }

  /**
   * GameScore createMany
   */
  export type GameScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScore createManyAndReturn
   */
  export type GameScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScore update
   */
  export type GameScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data needed to update a GameScore.
     */
    data: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
    /**
     * Choose, which GameScore to update.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore updateMany
   */
  export type GameScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScore updateManyAndReturn
   */
  export type GameScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScore upsert
   */
  export type GameScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The filter to search for the GameScore to update in case it exists.
     */
    where: GameScoreWhereUniqueInput
    /**
     * In case the GameScore found by the `where` argument doesn't exist, create a new GameScore with this data.
     */
    create: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
    /**
     * In case the GameScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
  }

  /**
   * GameScore delete
   */
  export type GameScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter which GameScore to delete.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore deleteMany
   */
  export type GameScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScores to delete
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to delete.
     */
    limit?: number
  }

  /**
   * GameScore without action
   */
  export type GameScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
  }


  /**
   * Model SecretClubBadge
   */

  export type AggregateSecretClubBadge = {
    _count: SecretClubBadgeCountAggregateOutputType | null
    _min: SecretClubBadgeMinAggregateOutputType | null
    _max: SecretClubBadgeMaxAggregateOutputType | null
  }

  export type SecretClubBadgeMinAggregateOutputType = {
    id: string | null
    badgeCode: string | null
    title: string | null
    description: string | null
    icon: string | null
    isUnlocked: boolean | null
    unlockedAt: Date | null
  }

  export type SecretClubBadgeMaxAggregateOutputType = {
    id: string | null
    badgeCode: string | null
    title: string | null
    description: string | null
    icon: string | null
    isUnlocked: boolean | null
    unlockedAt: Date | null
  }

  export type SecretClubBadgeCountAggregateOutputType = {
    id: number
    badgeCode: number
    title: number
    description: number
    icon: number
    isUnlocked: number
    unlockedAt: number
    _all: number
  }


  export type SecretClubBadgeMinAggregateInputType = {
    id?: true
    badgeCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
  }

  export type SecretClubBadgeMaxAggregateInputType = {
    id?: true
    badgeCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
  }

  export type SecretClubBadgeCountAggregateInputType = {
    id?: true
    badgeCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
    _all?: true
  }

  export type SecretClubBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretClubBadge to aggregate.
     */
    where?: SecretClubBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubBadges to fetch.
     */
    orderBy?: SecretClubBadgeOrderByWithRelationInput | SecretClubBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretClubBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecretClubBadges
    **/
    _count?: true | SecretClubBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretClubBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretClubBadgeMaxAggregateInputType
  }

  export type GetSecretClubBadgeAggregateType<T extends SecretClubBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretClubBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretClubBadge[P]>
      : GetScalarType<T[P], AggregateSecretClubBadge[P]>
  }




  export type SecretClubBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretClubBadgeWhereInput
    orderBy?: SecretClubBadgeOrderByWithAggregationInput | SecretClubBadgeOrderByWithAggregationInput[]
    by: SecretClubBadgeScalarFieldEnum[] | SecretClubBadgeScalarFieldEnum
    having?: SecretClubBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretClubBadgeCountAggregateInputType | true
    _min?: SecretClubBadgeMinAggregateInputType
    _max?: SecretClubBadgeMaxAggregateInputType
  }

  export type SecretClubBadgeGroupByOutputType = {
    id: string
    badgeCode: string
    title: string
    description: string
    icon: string
    isUnlocked: boolean
    unlockedAt: Date | null
    _count: SecretClubBadgeCountAggregateOutputType | null
    _min: SecretClubBadgeMinAggregateOutputType | null
    _max: SecretClubBadgeMaxAggregateOutputType | null
  }

  type GetSecretClubBadgeGroupByPayload<T extends SecretClubBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretClubBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretClubBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretClubBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], SecretClubBadgeGroupByOutputType[P]>
        }
      >
    >


  export type SecretClubBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubBadge"]>

  export type SecretClubBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubBadge"]>

  export type SecretClubBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubBadge"]>

  export type SecretClubBadgeSelectScalar = {
    id?: boolean
    badgeCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }

  export type SecretClubBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "badgeCode" | "title" | "description" | "icon" | "isUnlocked" | "unlockedAt", ExtArgs["result"]["secretClubBadge"]>

  export type $SecretClubBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecretClubBadge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      badgeCode: string
      title: string
      description: string
      icon: string
      isUnlocked: boolean
      unlockedAt: Date | null
    }, ExtArgs["result"]["secretClubBadge"]>
    composites: {}
  }

  type SecretClubBadgeGetPayload<S extends boolean | null | undefined | SecretClubBadgeDefaultArgs> = $Result.GetResult<Prisma.$SecretClubBadgePayload, S>

  type SecretClubBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretClubBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretClubBadgeCountAggregateInputType | true
    }

  export interface SecretClubBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecretClubBadge'], meta: { name: 'SecretClubBadge' } }
    /**
     * Find zero or one SecretClubBadge that matches the filter.
     * @param {SecretClubBadgeFindUniqueArgs} args - Arguments to find a SecretClubBadge
     * @example
     * // Get one SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretClubBadgeFindUniqueArgs>(args: SelectSubset<T, SecretClubBadgeFindUniqueArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecretClubBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretClubBadgeFindUniqueOrThrowArgs} args - Arguments to find a SecretClubBadge
     * @example
     * // Get one SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretClubBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretClubBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretClubBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeFindFirstArgs} args - Arguments to find a SecretClubBadge
     * @example
     * // Get one SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretClubBadgeFindFirstArgs>(args?: SelectSubset<T, SecretClubBadgeFindFirstArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretClubBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeFindFirstOrThrowArgs} args - Arguments to find a SecretClubBadge
     * @example
     * // Get one SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretClubBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretClubBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecretClubBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecretClubBadges
     * const secretClubBadges = await prisma.secretClubBadge.findMany()
     * 
     * // Get first 10 SecretClubBadges
     * const secretClubBadges = await prisma.secretClubBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretClubBadgeWithIdOnly = await prisma.secretClubBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretClubBadgeFindManyArgs>(args?: SelectSubset<T, SecretClubBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecretClubBadge.
     * @param {SecretClubBadgeCreateArgs} args - Arguments to create a SecretClubBadge.
     * @example
     * // Create one SecretClubBadge
     * const SecretClubBadge = await prisma.secretClubBadge.create({
     *   data: {
     *     // ... data to create a SecretClubBadge
     *   }
     * })
     * 
     */
    create<T extends SecretClubBadgeCreateArgs>(args: SelectSubset<T, SecretClubBadgeCreateArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecretClubBadges.
     * @param {SecretClubBadgeCreateManyArgs} args - Arguments to create many SecretClubBadges.
     * @example
     * // Create many SecretClubBadges
     * const secretClubBadge = await prisma.secretClubBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretClubBadgeCreateManyArgs>(args?: SelectSubset<T, SecretClubBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecretClubBadges and returns the data saved in the database.
     * @param {SecretClubBadgeCreateManyAndReturnArgs} args - Arguments to create many SecretClubBadges.
     * @example
     * // Create many SecretClubBadges
     * const secretClubBadge = await prisma.secretClubBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecretClubBadges and only return the `id`
     * const secretClubBadgeWithIdOnly = await prisma.secretClubBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretClubBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretClubBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecretClubBadge.
     * @param {SecretClubBadgeDeleteArgs} args - Arguments to delete one SecretClubBadge.
     * @example
     * // Delete one SecretClubBadge
     * const SecretClubBadge = await prisma.secretClubBadge.delete({
     *   where: {
     *     // ... filter to delete one SecretClubBadge
     *   }
     * })
     * 
     */
    delete<T extends SecretClubBadgeDeleteArgs>(args: SelectSubset<T, SecretClubBadgeDeleteArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecretClubBadge.
     * @param {SecretClubBadgeUpdateArgs} args - Arguments to update one SecretClubBadge.
     * @example
     * // Update one SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretClubBadgeUpdateArgs>(args: SelectSubset<T, SecretClubBadgeUpdateArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecretClubBadges.
     * @param {SecretClubBadgeDeleteManyArgs} args - Arguments to filter SecretClubBadges to delete.
     * @example
     * // Delete a few SecretClubBadges
     * const { count } = await prisma.secretClubBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretClubBadgeDeleteManyArgs>(args?: SelectSubset<T, SecretClubBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretClubBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecretClubBadges
     * const secretClubBadge = await prisma.secretClubBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretClubBadgeUpdateManyArgs>(args: SelectSubset<T, SecretClubBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretClubBadges and returns the data updated in the database.
     * @param {SecretClubBadgeUpdateManyAndReturnArgs} args - Arguments to update many SecretClubBadges.
     * @example
     * // Update many SecretClubBadges
     * const secretClubBadge = await prisma.secretClubBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecretClubBadges and only return the `id`
     * const secretClubBadgeWithIdOnly = await prisma.secretClubBadge.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SecretClubBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretClubBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecretClubBadge.
     * @param {SecretClubBadgeUpsertArgs} args - Arguments to update or create a SecretClubBadge.
     * @example
     * // Update or create a SecretClubBadge
     * const secretClubBadge = await prisma.secretClubBadge.upsert({
     *   create: {
     *     // ... data to create a SecretClubBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecretClubBadge we want to update
     *   }
     * })
     */
    upsert<T extends SecretClubBadgeUpsertArgs>(args: SelectSubset<T, SecretClubBadgeUpsertArgs<ExtArgs>>): Prisma__SecretClubBadgeClient<$Result.GetResult<Prisma.$SecretClubBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecretClubBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeCountArgs} args - Arguments to filter SecretClubBadges to count.
     * @example
     * // Count the number of SecretClubBadges
     * const count = await prisma.secretClubBadge.count({
     *   where: {
     *     // ... the filter for the SecretClubBadges we want to count
     *   }
     * })
    **/
    count<T extends SecretClubBadgeCountArgs>(
      args?: Subset<T, SecretClubBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretClubBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecretClubBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretClubBadgeAggregateArgs>(args: Subset<T, SecretClubBadgeAggregateArgs>): Prisma.PrismaPromise<GetSecretClubBadgeAggregateType<T>>

    /**
     * Group by SecretClubBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubBadgeGroupByArgs} args - Group by arguments.
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
      T extends SecretClubBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretClubBadgeGroupByArgs['orderBy'] }
        : { orderBy?: SecretClubBadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretClubBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretClubBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecretClubBadge model
   */
  readonly fields: SecretClubBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecretClubBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretClubBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SecretClubBadge model
   */
  interface SecretClubBadgeFieldRefs {
    readonly id: FieldRef<"SecretClubBadge", 'String'>
    readonly badgeCode: FieldRef<"SecretClubBadge", 'String'>
    readonly title: FieldRef<"SecretClubBadge", 'String'>
    readonly description: FieldRef<"SecretClubBadge", 'String'>
    readonly icon: FieldRef<"SecretClubBadge", 'String'>
    readonly isUnlocked: FieldRef<"SecretClubBadge", 'Boolean'>
    readonly unlockedAt: FieldRef<"SecretClubBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecretClubBadge findUnique
   */
  export type SecretClubBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubBadge to fetch.
     */
    where: SecretClubBadgeWhereUniqueInput
  }

  /**
   * SecretClubBadge findUniqueOrThrow
   */
  export type SecretClubBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubBadge to fetch.
     */
    where: SecretClubBadgeWhereUniqueInput
  }

  /**
   * SecretClubBadge findFirst
   */
  export type SecretClubBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubBadge to fetch.
     */
    where?: SecretClubBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubBadges to fetch.
     */
    orderBy?: SecretClubBadgeOrderByWithRelationInput | SecretClubBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretClubBadges.
     */
    cursor?: SecretClubBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubBadges.
     */
    distinct?: SecretClubBadgeScalarFieldEnum | SecretClubBadgeScalarFieldEnum[]
  }

  /**
   * SecretClubBadge findFirstOrThrow
   */
  export type SecretClubBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubBadge to fetch.
     */
    where?: SecretClubBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubBadges to fetch.
     */
    orderBy?: SecretClubBadgeOrderByWithRelationInput | SecretClubBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretClubBadges.
     */
    cursor?: SecretClubBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubBadges.
     */
    distinct?: SecretClubBadgeScalarFieldEnum | SecretClubBadgeScalarFieldEnum[]
  }

  /**
   * SecretClubBadge findMany
   */
  export type SecretClubBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubBadges to fetch.
     */
    where?: SecretClubBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubBadges to fetch.
     */
    orderBy?: SecretClubBadgeOrderByWithRelationInput | SecretClubBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecretClubBadges.
     */
    cursor?: SecretClubBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubBadges.
     */
    distinct?: SecretClubBadgeScalarFieldEnum | SecretClubBadgeScalarFieldEnum[]
  }

  /**
   * SecretClubBadge create
   */
  export type SecretClubBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * The data needed to create a SecretClubBadge.
     */
    data: XOR<SecretClubBadgeCreateInput, SecretClubBadgeUncheckedCreateInput>
  }

  /**
   * SecretClubBadge createMany
   */
  export type SecretClubBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecretClubBadges.
     */
    data: SecretClubBadgeCreateManyInput | SecretClubBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretClubBadge createManyAndReturn
   */
  export type SecretClubBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many SecretClubBadges.
     */
    data: SecretClubBadgeCreateManyInput | SecretClubBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretClubBadge update
   */
  export type SecretClubBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * The data needed to update a SecretClubBadge.
     */
    data: XOR<SecretClubBadgeUpdateInput, SecretClubBadgeUncheckedUpdateInput>
    /**
     * Choose, which SecretClubBadge to update.
     */
    where: SecretClubBadgeWhereUniqueInput
  }

  /**
   * SecretClubBadge updateMany
   */
  export type SecretClubBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecretClubBadges.
     */
    data: XOR<SecretClubBadgeUpdateManyMutationInput, SecretClubBadgeUncheckedUpdateManyInput>
    /**
     * Filter which SecretClubBadges to update
     */
    where?: SecretClubBadgeWhereInput
    /**
     * Limit how many SecretClubBadges to update.
     */
    limit?: number
  }

  /**
   * SecretClubBadge updateManyAndReturn
   */
  export type SecretClubBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * The data used to update SecretClubBadges.
     */
    data: XOR<SecretClubBadgeUpdateManyMutationInput, SecretClubBadgeUncheckedUpdateManyInput>
    /**
     * Filter which SecretClubBadges to update
     */
    where?: SecretClubBadgeWhereInput
    /**
     * Limit how many SecretClubBadges to update.
     */
    limit?: number
  }

  /**
   * SecretClubBadge upsert
   */
  export type SecretClubBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * The filter to search for the SecretClubBadge to update in case it exists.
     */
    where: SecretClubBadgeWhereUniqueInput
    /**
     * In case the SecretClubBadge found by the `where` argument doesn't exist, create a new SecretClubBadge with this data.
     */
    create: XOR<SecretClubBadgeCreateInput, SecretClubBadgeUncheckedCreateInput>
    /**
     * In case the SecretClubBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretClubBadgeUpdateInput, SecretClubBadgeUncheckedUpdateInput>
  }

  /**
   * SecretClubBadge delete
   */
  export type SecretClubBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
    /**
     * Filter which SecretClubBadge to delete.
     */
    where: SecretClubBadgeWhereUniqueInput
  }

  /**
   * SecretClubBadge deleteMany
   */
  export type SecretClubBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretClubBadges to delete
     */
    where?: SecretClubBadgeWhereInput
    /**
     * Limit how many SecretClubBadges to delete.
     */
    limit?: number
  }

  /**
   * SecretClubBadge without action
   */
  export type SecretClubBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubBadge
     */
    select?: SecretClubBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubBadge
     */
    omit?: SecretClubBadgeOmit<ExtArgs> | null
  }


  /**
   * Model VoiceMessage
   */

  export type AggregateVoiceMessage = {
    _count: VoiceMessageCountAggregateOutputType | null
    _min: VoiceMessageMinAggregateOutputType | null
    _max: VoiceMessageMaxAggregateOutputType | null
  }

  export type VoiceMessageMinAggregateOutputType = {
    id: string | null
    fromName: string | null
    messageEn: string | null
    messageAr: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type VoiceMessageMaxAggregateOutputType = {
    id: string | null
    fromName: string | null
    messageEn: string | null
    messageAr: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type VoiceMessageCountAggregateOutputType = {
    id: number
    fromName: number
    messageEn: number
    messageAr: number
    icon: number
    createdAt: number
    _all: number
  }


  export type VoiceMessageMinAggregateInputType = {
    id?: true
    fromName?: true
    messageEn?: true
    messageAr?: true
    icon?: true
    createdAt?: true
  }

  export type VoiceMessageMaxAggregateInputType = {
    id?: true
    fromName?: true
    messageEn?: true
    messageAr?: true
    icon?: true
    createdAt?: true
  }

  export type VoiceMessageCountAggregateInputType = {
    id?: true
    fromName?: true
    messageEn?: true
    messageAr?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type VoiceMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceMessage to aggregate.
     */
    where?: VoiceMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMessages to fetch.
     */
    orderBy?: VoiceMessageOrderByWithRelationInput | VoiceMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceMessages
    **/
    _count?: true | VoiceMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceMessageMaxAggregateInputType
  }

  export type GetVoiceMessageAggregateType<T extends VoiceMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceMessage[P]>
      : GetScalarType<T[P], AggregateVoiceMessage[P]>
  }




  export type VoiceMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceMessageWhereInput
    orderBy?: VoiceMessageOrderByWithAggregationInput | VoiceMessageOrderByWithAggregationInput[]
    by: VoiceMessageScalarFieldEnum[] | VoiceMessageScalarFieldEnum
    having?: VoiceMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceMessageCountAggregateInputType | true
    _min?: VoiceMessageMinAggregateInputType
    _max?: VoiceMessageMaxAggregateInputType
  }

  export type VoiceMessageGroupByOutputType = {
    id: string
    fromName: string
    messageEn: string
    messageAr: string
    icon: string
    createdAt: Date
    _count: VoiceMessageCountAggregateOutputType | null
    _min: VoiceMessageMinAggregateOutputType | null
    _max: VoiceMessageMaxAggregateOutputType | null
  }

  type GetVoiceMessageGroupByPayload<T extends VoiceMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceMessageGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceMessageGroupByOutputType[P]>
        }
      >
    >


  export type VoiceMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromName?: boolean
    messageEn?: boolean
    messageAr?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceMessage"]>

  export type VoiceMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromName?: boolean
    messageEn?: boolean
    messageAr?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceMessage"]>

  export type VoiceMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromName?: boolean
    messageEn?: boolean
    messageAr?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceMessage"]>

  export type VoiceMessageSelectScalar = {
    id?: boolean
    fromName?: boolean
    messageEn?: boolean
    messageAr?: boolean
    icon?: boolean
    createdAt?: boolean
  }

  export type VoiceMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromName" | "messageEn" | "messageAr" | "icon" | "createdAt", ExtArgs["result"]["voiceMessage"]>

  export type $VoiceMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromName: string
      messageEn: string
      messageAr: string
      icon: string
      createdAt: Date
    }, ExtArgs["result"]["voiceMessage"]>
    composites: {}
  }

  type VoiceMessageGetPayload<S extends boolean | null | undefined | VoiceMessageDefaultArgs> = $Result.GetResult<Prisma.$VoiceMessagePayload, S>

  type VoiceMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceMessageCountAggregateInputType | true
    }

  export interface VoiceMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceMessage'], meta: { name: 'VoiceMessage' } }
    /**
     * Find zero or one VoiceMessage that matches the filter.
     * @param {VoiceMessageFindUniqueArgs} args - Arguments to find a VoiceMessage
     * @example
     * // Get one VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceMessageFindUniqueArgs>(args: SelectSubset<T, VoiceMessageFindUniqueArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceMessageFindUniqueOrThrowArgs} args - Arguments to find a VoiceMessage
     * @example
     * // Get one VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageFindFirstArgs} args - Arguments to find a VoiceMessage
     * @example
     * // Get one VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceMessageFindFirstArgs>(args?: SelectSubset<T, VoiceMessageFindFirstArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageFindFirstOrThrowArgs} args - Arguments to find a VoiceMessage
     * @example
     * // Get one VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceMessages
     * const voiceMessages = await prisma.voiceMessage.findMany()
     * 
     * // Get first 10 VoiceMessages
     * const voiceMessages = await prisma.voiceMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceMessageWithIdOnly = await prisma.voiceMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceMessageFindManyArgs>(args?: SelectSubset<T, VoiceMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceMessage.
     * @param {VoiceMessageCreateArgs} args - Arguments to create a VoiceMessage.
     * @example
     * // Create one VoiceMessage
     * const VoiceMessage = await prisma.voiceMessage.create({
     *   data: {
     *     // ... data to create a VoiceMessage
     *   }
     * })
     * 
     */
    create<T extends VoiceMessageCreateArgs>(args: SelectSubset<T, VoiceMessageCreateArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceMessages.
     * @param {VoiceMessageCreateManyArgs} args - Arguments to create many VoiceMessages.
     * @example
     * // Create many VoiceMessages
     * const voiceMessage = await prisma.voiceMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceMessageCreateManyArgs>(args?: SelectSubset<T, VoiceMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceMessages and returns the data saved in the database.
     * @param {VoiceMessageCreateManyAndReturnArgs} args - Arguments to create many VoiceMessages.
     * @example
     * // Create many VoiceMessages
     * const voiceMessage = await prisma.voiceMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceMessages and only return the `id`
     * const voiceMessageWithIdOnly = await prisma.voiceMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceMessage.
     * @param {VoiceMessageDeleteArgs} args - Arguments to delete one VoiceMessage.
     * @example
     * // Delete one VoiceMessage
     * const VoiceMessage = await prisma.voiceMessage.delete({
     *   where: {
     *     // ... filter to delete one VoiceMessage
     *   }
     * })
     * 
     */
    delete<T extends VoiceMessageDeleteArgs>(args: SelectSubset<T, VoiceMessageDeleteArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceMessage.
     * @param {VoiceMessageUpdateArgs} args - Arguments to update one VoiceMessage.
     * @example
     * // Update one VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceMessageUpdateArgs>(args: SelectSubset<T, VoiceMessageUpdateArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceMessages.
     * @param {VoiceMessageDeleteManyArgs} args - Arguments to filter VoiceMessages to delete.
     * @example
     * // Delete a few VoiceMessages
     * const { count } = await prisma.voiceMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceMessageDeleteManyArgs>(args?: SelectSubset<T, VoiceMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceMessages
     * const voiceMessage = await prisma.voiceMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceMessageUpdateManyArgs>(args: SelectSubset<T, VoiceMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceMessages and returns the data updated in the database.
     * @param {VoiceMessageUpdateManyAndReturnArgs} args - Arguments to update many VoiceMessages.
     * @example
     * // Update many VoiceMessages
     * const voiceMessage = await prisma.voiceMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceMessages and only return the `id`
     * const voiceMessageWithIdOnly = await prisma.voiceMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VoiceMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceMessage.
     * @param {VoiceMessageUpsertArgs} args - Arguments to update or create a VoiceMessage.
     * @example
     * // Update or create a VoiceMessage
     * const voiceMessage = await prisma.voiceMessage.upsert({
     *   create: {
     *     // ... data to create a VoiceMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceMessage we want to update
     *   }
     * })
     */
    upsert<T extends VoiceMessageUpsertArgs>(args: SelectSubset<T, VoiceMessageUpsertArgs<ExtArgs>>): Prisma__VoiceMessageClient<$Result.GetResult<Prisma.$VoiceMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageCountArgs} args - Arguments to filter VoiceMessages to count.
     * @example
     * // Count the number of VoiceMessages
     * const count = await prisma.voiceMessage.count({
     *   where: {
     *     // ... the filter for the VoiceMessages we want to count
     *   }
     * })
    **/
    count<T extends VoiceMessageCountArgs>(
      args?: Subset<T, VoiceMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoiceMessageAggregateArgs>(args: Subset<T, VoiceMessageAggregateArgs>): Prisma.PrismaPromise<GetVoiceMessageAggregateType<T>>

    /**
     * Group by VoiceMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceMessageGroupByArgs} args - Group by arguments.
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
      T extends VoiceMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceMessageGroupByArgs['orderBy'] }
        : { orderBy?: VoiceMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoiceMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceMessage model
   */
  readonly fields: VoiceMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VoiceMessage model
   */
  interface VoiceMessageFieldRefs {
    readonly id: FieldRef<"VoiceMessage", 'String'>
    readonly fromName: FieldRef<"VoiceMessage", 'String'>
    readonly messageEn: FieldRef<"VoiceMessage", 'String'>
    readonly messageAr: FieldRef<"VoiceMessage", 'String'>
    readonly icon: FieldRef<"VoiceMessage", 'String'>
    readonly createdAt: FieldRef<"VoiceMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VoiceMessage findUnique
   */
  export type VoiceMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter, which VoiceMessage to fetch.
     */
    where: VoiceMessageWhereUniqueInput
  }

  /**
   * VoiceMessage findUniqueOrThrow
   */
  export type VoiceMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter, which VoiceMessage to fetch.
     */
    where: VoiceMessageWhereUniqueInput
  }

  /**
   * VoiceMessage findFirst
   */
  export type VoiceMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter, which VoiceMessage to fetch.
     */
    where?: VoiceMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMessages to fetch.
     */
    orderBy?: VoiceMessageOrderByWithRelationInput | VoiceMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceMessages.
     */
    cursor?: VoiceMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceMessages.
     */
    distinct?: VoiceMessageScalarFieldEnum | VoiceMessageScalarFieldEnum[]
  }

  /**
   * VoiceMessage findFirstOrThrow
   */
  export type VoiceMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter, which VoiceMessage to fetch.
     */
    where?: VoiceMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMessages to fetch.
     */
    orderBy?: VoiceMessageOrderByWithRelationInput | VoiceMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceMessages.
     */
    cursor?: VoiceMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceMessages.
     */
    distinct?: VoiceMessageScalarFieldEnum | VoiceMessageScalarFieldEnum[]
  }

  /**
   * VoiceMessage findMany
   */
  export type VoiceMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter, which VoiceMessages to fetch.
     */
    where?: VoiceMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceMessages to fetch.
     */
    orderBy?: VoiceMessageOrderByWithRelationInput | VoiceMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceMessages.
     */
    cursor?: VoiceMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceMessages.
     */
    distinct?: VoiceMessageScalarFieldEnum | VoiceMessageScalarFieldEnum[]
  }

  /**
   * VoiceMessage create
   */
  export type VoiceMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a VoiceMessage.
     */
    data: XOR<VoiceMessageCreateInput, VoiceMessageUncheckedCreateInput>
  }

  /**
   * VoiceMessage createMany
   */
  export type VoiceMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceMessages.
     */
    data: VoiceMessageCreateManyInput | VoiceMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceMessage createManyAndReturn
   */
  export type VoiceMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceMessages.
     */
    data: VoiceMessageCreateManyInput | VoiceMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceMessage update
   */
  export type VoiceMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a VoiceMessage.
     */
    data: XOR<VoiceMessageUpdateInput, VoiceMessageUncheckedUpdateInput>
    /**
     * Choose, which VoiceMessage to update.
     */
    where: VoiceMessageWhereUniqueInput
  }

  /**
   * VoiceMessage updateMany
   */
  export type VoiceMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceMessages.
     */
    data: XOR<VoiceMessageUpdateManyMutationInput, VoiceMessageUncheckedUpdateManyInput>
    /**
     * Filter which VoiceMessages to update
     */
    where?: VoiceMessageWhereInput
    /**
     * Limit how many VoiceMessages to update.
     */
    limit?: number
  }

  /**
   * VoiceMessage updateManyAndReturn
   */
  export type VoiceMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * The data used to update VoiceMessages.
     */
    data: XOR<VoiceMessageUpdateManyMutationInput, VoiceMessageUncheckedUpdateManyInput>
    /**
     * Filter which VoiceMessages to update
     */
    where?: VoiceMessageWhereInput
    /**
     * Limit how many VoiceMessages to update.
     */
    limit?: number
  }

  /**
   * VoiceMessage upsert
   */
  export type VoiceMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the VoiceMessage to update in case it exists.
     */
    where: VoiceMessageWhereUniqueInput
    /**
     * In case the VoiceMessage found by the `where` argument doesn't exist, create a new VoiceMessage with this data.
     */
    create: XOR<VoiceMessageCreateInput, VoiceMessageUncheckedCreateInput>
    /**
     * In case the VoiceMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceMessageUpdateInput, VoiceMessageUncheckedUpdateInput>
  }

  /**
   * VoiceMessage delete
   */
  export type VoiceMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
    /**
     * Filter which VoiceMessage to delete.
     */
    where: VoiceMessageWhereUniqueInput
  }

  /**
   * VoiceMessage deleteMany
   */
  export type VoiceMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceMessages to delete
     */
    where?: VoiceMessageWhereInput
    /**
     * Limit how many VoiceMessages to delete.
     */
    limit?: number
  }

  /**
   * VoiceMessage without action
   */
  export type VoiceMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceMessage
     */
    select?: VoiceMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceMessage
     */
    omit?: VoiceMessageOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    princessAge: number | null
  }

  export type SettingsSumAggregateOutputType = {
    princessAge: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    princessName: string | null
    princessAge: number | null
    favoriteColor: string | null
    pinCode: string | null
    welcomeVoiceEn: string | null
    welcomeVoiceAr: string | null
    soundEnabled: boolean | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    princessName: string | null
    princessAge: number | null
    favoriteColor: string | null
    pinCode: string | null
    welcomeVoiceEn: string | null
    welcomeVoiceAr: string | null
    soundEnabled: boolean | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    princessName: number
    princessAge: number
    favoriteColor: number
    pinCode: number
    welcomeVoiceEn: number
    welcomeVoiceAr: number
    soundEnabled: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    princessAge?: true
  }

  export type SettingsSumAggregateInputType = {
    princessAge?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    princessName?: true
    princessAge?: true
    favoriteColor?: true
    pinCode?: true
    welcomeVoiceEn?: true
    welcomeVoiceAr?: true
    soundEnabled?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    princessName?: true
    princessAge?: true
    favoriteColor?: true
    pinCode?: true
    welcomeVoiceEn?: true
    welcomeVoiceAr?: true
    soundEnabled?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    princessName?: true
    princessAge?: true
    favoriteColor?: true
    pinCode?: true
    welcomeVoiceEn?: true
    welcomeVoiceAr?: true
    soundEnabled?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    princessName: string
    princessAge: number
    favoriteColor: string
    pinCode: string
    welcomeVoiceEn: string
    welcomeVoiceAr: string
    soundEnabled: boolean
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    princessName?: boolean
    princessAge?: boolean
    favoriteColor?: boolean
    pinCode?: boolean
    welcomeVoiceEn?: boolean
    welcomeVoiceAr?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    princessName?: boolean
    princessAge?: boolean
    favoriteColor?: boolean
    pinCode?: boolean
    welcomeVoiceEn?: boolean
    welcomeVoiceAr?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    princessName?: boolean
    princessAge?: boolean
    favoriteColor?: boolean
    pinCode?: boolean
    welcomeVoiceEn?: boolean
    welcomeVoiceAr?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    princessName?: boolean
    princessAge?: boolean
    favoriteColor?: boolean
    pinCode?: boolean
    welcomeVoiceEn?: boolean
    welcomeVoiceAr?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "princessName" | "princessAge" | "favoriteColor" | "pinCode" | "welcomeVoiceEn" | "welcomeVoiceAr" | "soundEnabled" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      princessName: string
      princessAge: number
      favoriteColor: string
      pinCode: string
      welcomeVoiceEn: string
      welcomeVoiceAr: string
      soundEnabled: boolean
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly princessName: FieldRef<"Settings", 'String'>
    readonly princessAge: FieldRef<"Settings", 'Int'>
    readonly favoriteColor: FieldRef<"Settings", 'String'>
    readonly pinCode: FieldRef<"Settings", 'String'>
    readonly welcomeVoiceEn: FieldRef<"Settings", 'String'>
    readonly welcomeVoiceAr: FieldRef<"Settings", 'String'>
    readonly soundEnabled: FieldRef<"Settings", 'Boolean'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
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


  export const DrawingArtworkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artistName: 'artistName',
    imageData: 'imageData',
    likesCount: 'likesCount',
    stickers: 'stickers',
    createdAt: 'createdAt'
  };

  export type DrawingArtworkScalarFieldEnum = (typeof DrawingArtworkScalarFieldEnum)[keyof typeof DrawingArtworkScalarFieldEnum]


  export const FashionDesignScalarFieldEnum: {
    id: 'id',
    title: 'title',
    dressStyle: 'dressStyle',
    hairStyle: 'hairStyle',
    crown: 'crown',
    wings: 'wings',
    accessory: 'accessory',
    background: 'background',
    previewData: 'previewData',
    createdAt: 'createdAt'
  };

  export type FashionDesignScalarFieldEnum = (typeof FashionDesignScalarFieldEnum)[keyof typeof FashionDesignScalarFieldEnum]


  export const GameScoreScalarFieldEnum: {
    id: 'id',
    playerName: 'playerName',
    gameType: 'gameType',
    score: 'score',
    stars: 'stars',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type GameScoreScalarFieldEnum = (typeof GameScoreScalarFieldEnum)[keyof typeof GameScoreScalarFieldEnum]


  export const SecretClubBadgeScalarFieldEnum: {
    id: 'id',
    badgeCode: 'badgeCode',
    title: 'title',
    description: 'description',
    icon: 'icon',
    isUnlocked: 'isUnlocked',
    unlockedAt: 'unlockedAt'
  };

  export type SecretClubBadgeScalarFieldEnum = (typeof SecretClubBadgeScalarFieldEnum)[keyof typeof SecretClubBadgeScalarFieldEnum]


  export const VoiceMessageScalarFieldEnum: {
    id: 'id',
    fromName: 'fromName',
    messageEn: 'messageEn',
    messageAr: 'messageAr',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type VoiceMessageScalarFieldEnum = (typeof VoiceMessageScalarFieldEnum)[keyof typeof VoiceMessageScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    princessName: 'princessName',
    princessAge: 'princessAge',
    favoriteColor: 'favoriteColor',
    pinCode: 'pinCode',
    welcomeVoiceEn: 'welcomeVoiceEn',
    welcomeVoiceAr: 'welcomeVoiceAr',
    soundEnabled: 'soundEnabled',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type DrawingArtworkWhereInput = {
    AND?: DrawingArtworkWhereInput | DrawingArtworkWhereInput[]
    OR?: DrawingArtworkWhereInput[]
    NOT?: DrawingArtworkWhereInput | DrawingArtworkWhereInput[]
    id?: StringFilter<"DrawingArtwork"> | string
    title?: StringFilter<"DrawingArtwork"> | string
    artistName?: StringFilter<"DrawingArtwork"> | string
    imageData?: StringFilter<"DrawingArtwork"> | string
    likesCount?: IntFilter<"DrawingArtwork"> | number
    stickers?: StringNullableFilter<"DrawingArtwork"> | string | null
    createdAt?: DateTimeFilter<"DrawingArtwork"> | Date | string
  }

  export type DrawingArtworkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artistName?: SortOrder
    imageData?: SortOrder
    likesCount?: SortOrder
    stickers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DrawingArtworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawingArtworkWhereInput | DrawingArtworkWhereInput[]
    OR?: DrawingArtworkWhereInput[]
    NOT?: DrawingArtworkWhereInput | DrawingArtworkWhereInput[]
    title?: StringFilter<"DrawingArtwork"> | string
    artistName?: StringFilter<"DrawingArtwork"> | string
    imageData?: StringFilter<"DrawingArtwork"> | string
    likesCount?: IntFilter<"DrawingArtwork"> | number
    stickers?: StringNullableFilter<"DrawingArtwork"> | string | null
    createdAt?: DateTimeFilter<"DrawingArtwork"> | Date | string
  }, "id">

  export type DrawingArtworkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artistName?: SortOrder
    imageData?: SortOrder
    likesCount?: SortOrder
    stickers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DrawingArtworkCountOrderByAggregateInput
    _avg?: DrawingArtworkAvgOrderByAggregateInput
    _max?: DrawingArtworkMaxOrderByAggregateInput
    _min?: DrawingArtworkMinOrderByAggregateInput
    _sum?: DrawingArtworkSumOrderByAggregateInput
  }

  export type DrawingArtworkScalarWhereWithAggregatesInput = {
    AND?: DrawingArtworkScalarWhereWithAggregatesInput | DrawingArtworkScalarWhereWithAggregatesInput[]
    OR?: DrawingArtworkScalarWhereWithAggregatesInput[]
    NOT?: DrawingArtworkScalarWhereWithAggregatesInput | DrawingArtworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrawingArtwork"> | string
    title?: StringWithAggregatesFilter<"DrawingArtwork"> | string
    artistName?: StringWithAggregatesFilter<"DrawingArtwork"> | string
    imageData?: StringWithAggregatesFilter<"DrawingArtwork"> | string
    likesCount?: IntWithAggregatesFilter<"DrawingArtwork"> | number
    stickers?: StringNullableWithAggregatesFilter<"DrawingArtwork"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DrawingArtwork"> | Date | string
  }

  export type FashionDesignWhereInput = {
    AND?: FashionDesignWhereInput | FashionDesignWhereInput[]
    OR?: FashionDesignWhereInput[]
    NOT?: FashionDesignWhereInput | FashionDesignWhereInput[]
    id?: StringFilter<"FashionDesign"> | string
    title?: StringFilter<"FashionDesign"> | string
    dressStyle?: StringFilter<"FashionDesign"> | string
    hairStyle?: StringFilter<"FashionDesign"> | string
    crown?: StringFilter<"FashionDesign"> | string
    wings?: StringNullableFilter<"FashionDesign"> | string | null
    accessory?: StringNullableFilter<"FashionDesign"> | string | null
    background?: StringFilter<"FashionDesign"> | string
    previewData?: StringNullableFilter<"FashionDesign"> | string | null
    createdAt?: DateTimeFilter<"FashionDesign"> | Date | string
  }

  export type FashionDesignOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    dressStyle?: SortOrder
    hairStyle?: SortOrder
    crown?: SortOrder
    wings?: SortOrderInput | SortOrder
    accessory?: SortOrderInput | SortOrder
    background?: SortOrder
    previewData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FashionDesignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FashionDesignWhereInput | FashionDesignWhereInput[]
    OR?: FashionDesignWhereInput[]
    NOT?: FashionDesignWhereInput | FashionDesignWhereInput[]
    title?: StringFilter<"FashionDesign"> | string
    dressStyle?: StringFilter<"FashionDesign"> | string
    hairStyle?: StringFilter<"FashionDesign"> | string
    crown?: StringFilter<"FashionDesign"> | string
    wings?: StringNullableFilter<"FashionDesign"> | string | null
    accessory?: StringNullableFilter<"FashionDesign"> | string | null
    background?: StringFilter<"FashionDesign"> | string
    previewData?: StringNullableFilter<"FashionDesign"> | string | null
    createdAt?: DateTimeFilter<"FashionDesign"> | Date | string
  }, "id">

  export type FashionDesignOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    dressStyle?: SortOrder
    hairStyle?: SortOrder
    crown?: SortOrder
    wings?: SortOrderInput | SortOrder
    accessory?: SortOrderInput | SortOrder
    background?: SortOrder
    previewData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FashionDesignCountOrderByAggregateInput
    _max?: FashionDesignMaxOrderByAggregateInput
    _min?: FashionDesignMinOrderByAggregateInput
  }

  export type FashionDesignScalarWhereWithAggregatesInput = {
    AND?: FashionDesignScalarWhereWithAggregatesInput | FashionDesignScalarWhereWithAggregatesInput[]
    OR?: FashionDesignScalarWhereWithAggregatesInput[]
    NOT?: FashionDesignScalarWhereWithAggregatesInput | FashionDesignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FashionDesign"> | string
    title?: StringWithAggregatesFilter<"FashionDesign"> | string
    dressStyle?: StringWithAggregatesFilter<"FashionDesign"> | string
    hairStyle?: StringWithAggregatesFilter<"FashionDesign"> | string
    crown?: StringWithAggregatesFilter<"FashionDesign"> | string
    wings?: StringNullableWithAggregatesFilter<"FashionDesign"> | string | null
    accessory?: StringNullableWithAggregatesFilter<"FashionDesign"> | string | null
    background?: StringWithAggregatesFilter<"FashionDesign"> | string
    previewData?: StringNullableWithAggregatesFilter<"FashionDesign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FashionDesign"> | Date | string
  }

  export type GameScoreWhereInput = {
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    id?: StringFilter<"GameScore"> | string
    playerName?: StringFilter<"GameScore"> | string
    gameType?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    stars?: IntFilter<"GameScore"> | number
    level?: IntFilter<"GameScore"> | number
    createdAt?: DateTimeFilter<"GameScore"> | Date | string
  }

  export type GameScoreOrderByWithRelationInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    playerName?: StringFilter<"GameScore"> | string
    gameType?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    stars?: IntFilter<"GameScore"> | number
    level?: IntFilter<"GameScore"> | number
    createdAt?: DateTimeFilter<"GameScore"> | Date | string
  }, "id">

  export type GameScoreOrderByWithAggregationInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: GameScoreCountOrderByAggregateInput
    _avg?: GameScoreAvgOrderByAggregateInput
    _max?: GameScoreMaxOrderByAggregateInput
    _min?: GameScoreMinOrderByAggregateInput
    _sum?: GameScoreSumOrderByAggregateInput
  }

  export type GameScoreScalarWhereWithAggregatesInput = {
    AND?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    OR?: GameScoreScalarWhereWithAggregatesInput[]
    NOT?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameScore"> | string
    playerName?: StringWithAggregatesFilter<"GameScore"> | string
    gameType?: StringWithAggregatesFilter<"GameScore"> | string
    score?: IntWithAggregatesFilter<"GameScore"> | number
    stars?: IntWithAggregatesFilter<"GameScore"> | number
    level?: IntWithAggregatesFilter<"GameScore"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameScore"> | Date | string
  }

  export type SecretClubBadgeWhereInput = {
    AND?: SecretClubBadgeWhereInput | SecretClubBadgeWhereInput[]
    OR?: SecretClubBadgeWhereInput[]
    NOT?: SecretClubBadgeWhereInput | SecretClubBadgeWhereInput[]
    id?: StringFilter<"SecretClubBadge"> | string
    badgeCode?: StringFilter<"SecretClubBadge"> | string
    title?: StringFilter<"SecretClubBadge"> | string
    description?: StringFilter<"SecretClubBadge"> | string
    icon?: StringFilter<"SecretClubBadge"> | string
    isUnlocked?: BoolFilter<"SecretClubBadge"> | boolean
    unlockedAt?: DateTimeNullableFilter<"SecretClubBadge"> | Date | string | null
  }

  export type SecretClubBadgeOrderByWithRelationInput = {
    id?: SortOrder
    badgeCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
  }

  export type SecretClubBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    badgeCode?: string
    AND?: SecretClubBadgeWhereInput | SecretClubBadgeWhereInput[]
    OR?: SecretClubBadgeWhereInput[]
    NOT?: SecretClubBadgeWhereInput | SecretClubBadgeWhereInput[]
    title?: StringFilter<"SecretClubBadge"> | string
    description?: StringFilter<"SecretClubBadge"> | string
    icon?: StringFilter<"SecretClubBadge"> | string
    isUnlocked?: BoolFilter<"SecretClubBadge"> | boolean
    unlockedAt?: DateTimeNullableFilter<"SecretClubBadge"> | Date | string | null
  }, "id" | "badgeCode">

  export type SecretClubBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    badgeCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    _count?: SecretClubBadgeCountOrderByAggregateInput
    _max?: SecretClubBadgeMaxOrderByAggregateInput
    _min?: SecretClubBadgeMinOrderByAggregateInput
  }

  export type SecretClubBadgeScalarWhereWithAggregatesInput = {
    AND?: SecretClubBadgeScalarWhereWithAggregatesInput | SecretClubBadgeScalarWhereWithAggregatesInput[]
    OR?: SecretClubBadgeScalarWhereWithAggregatesInput[]
    NOT?: SecretClubBadgeScalarWhereWithAggregatesInput | SecretClubBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecretClubBadge"> | string
    badgeCode?: StringWithAggregatesFilter<"SecretClubBadge"> | string
    title?: StringWithAggregatesFilter<"SecretClubBadge"> | string
    description?: StringWithAggregatesFilter<"SecretClubBadge"> | string
    icon?: StringWithAggregatesFilter<"SecretClubBadge"> | string
    isUnlocked?: BoolWithAggregatesFilter<"SecretClubBadge"> | boolean
    unlockedAt?: DateTimeNullableWithAggregatesFilter<"SecretClubBadge"> | Date | string | null
  }

  export type VoiceMessageWhereInput = {
    AND?: VoiceMessageWhereInput | VoiceMessageWhereInput[]
    OR?: VoiceMessageWhereInput[]
    NOT?: VoiceMessageWhereInput | VoiceMessageWhereInput[]
    id?: StringFilter<"VoiceMessage"> | string
    fromName?: StringFilter<"VoiceMessage"> | string
    messageEn?: StringFilter<"VoiceMessage"> | string
    messageAr?: StringFilter<"VoiceMessage"> | string
    icon?: StringFilter<"VoiceMessage"> | string
    createdAt?: DateTimeFilter<"VoiceMessage"> | Date | string
  }

  export type VoiceMessageOrderByWithRelationInput = {
    id?: SortOrder
    fromName?: SortOrder
    messageEn?: SortOrder
    messageAr?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoiceMessageWhereInput | VoiceMessageWhereInput[]
    OR?: VoiceMessageWhereInput[]
    NOT?: VoiceMessageWhereInput | VoiceMessageWhereInput[]
    fromName?: StringFilter<"VoiceMessage"> | string
    messageEn?: StringFilter<"VoiceMessage"> | string
    messageAr?: StringFilter<"VoiceMessage"> | string
    icon?: StringFilter<"VoiceMessage"> | string
    createdAt?: DateTimeFilter<"VoiceMessage"> | Date | string
  }, "id">

  export type VoiceMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromName?: SortOrder
    messageEn?: SortOrder
    messageAr?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    _count?: VoiceMessageCountOrderByAggregateInput
    _max?: VoiceMessageMaxOrderByAggregateInput
    _min?: VoiceMessageMinOrderByAggregateInput
  }

  export type VoiceMessageScalarWhereWithAggregatesInput = {
    AND?: VoiceMessageScalarWhereWithAggregatesInput | VoiceMessageScalarWhereWithAggregatesInput[]
    OR?: VoiceMessageScalarWhereWithAggregatesInput[]
    NOT?: VoiceMessageScalarWhereWithAggregatesInput | VoiceMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoiceMessage"> | string
    fromName?: StringWithAggregatesFilter<"VoiceMessage"> | string
    messageEn?: StringWithAggregatesFilter<"VoiceMessage"> | string
    messageAr?: StringWithAggregatesFilter<"VoiceMessage"> | string
    icon?: StringWithAggregatesFilter<"VoiceMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VoiceMessage"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    princessName?: StringFilter<"Settings"> | string
    princessAge?: IntFilter<"Settings"> | number
    favoriteColor?: StringFilter<"Settings"> | string
    pinCode?: StringFilter<"Settings"> | string
    welcomeVoiceEn?: StringFilter<"Settings"> | string
    welcomeVoiceAr?: StringFilter<"Settings"> | string
    soundEnabled?: BoolFilter<"Settings"> | boolean
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    princessName?: SortOrder
    princessAge?: SortOrder
    favoriteColor?: SortOrder
    pinCode?: SortOrder
    welcomeVoiceEn?: SortOrder
    welcomeVoiceAr?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    princessName?: StringFilter<"Settings"> | string
    princessAge?: IntFilter<"Settings"> | number
    favoriteColor?: StringFilter<"Settings"> | string
    pinCode?: StringFilter<"Settings"> | string
    welcomeVoiceEn?: StringFilter<"Settings"> | string
    welcomeVoiceAr?: StringFilter<"Settings"> | string
    soundEnabled?: BoolFilter<"Settings"> | boolean
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    princessName?: SortOrder
    princessAge?: SortOrder
    favoriteColor?: SortOrder
    pinCode?: SortOrder
    welcomeVoiceEn?: SortOrder
    welcomeVoiceAr?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    princessName?: StringWithAggregatesFilter<"Settings"> | string
    princessAge?: IntWithAggregatesFilter<"Settings"> | number
    favoriteColor?: StringWithAggregatesFilter<"Settings"> | string
    pinCode?: StringWithAggregatesFilter<"Settings"> | string
    welcomeVoiceEn?: StringWithAggregatesFilter<"Settings"> | string
    welcomeVoiceAr?: StringWithAggregatesFilter<"Settings"> | string
    soundEnabled?: BoolWithAggregatesFilter<"Settings"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type DrawingArtworkCreateInput = {
    id?: string
    title?: string
    artistName?: string
    imageData: string
    likesCount?: number
    stickers?: string | null
    createdAt?: Date | string
  }

  export type DrawingArtworkUncheckedCreateInput = {
    id?: string
    title?: string
    artistName?: string
    imageData: string
    likesCount?: number
    stickers?: string | null
    createdAt?: Date | string
  }

  export type DrawingArtworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    stickers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingArtworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    stickers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingArtworkCreateManyInput = {
    id?: string
    title?: string
    artistName?: string
    imageData: string
    likesCount?: number
    stickers?: string | null
    createdAt?: Date | string
  }

  export type DrawingArtworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    stickers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingArtworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    imageData?: StringFieldUpdateOperationsInput | string
    likesCount?: IntFieldUpdateOperationsInput | number
    stickers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FashionDesignCreateInput = {
    id?: string
    title?: string
    dressStyle: string
    hairStyle: string
    crown: string
    wings?: string | null
    accessory?: string | null
    background?: string
    previewData?: string | null
    createdAt?: Date | string
  }

  export type FashionDesignUncheckedCreateInput = {
    id?: string
    title?: string
    dressStyle: string
    hairStyle: string
    crown: string
    wings?: string | null
    accessory?: string | null
    background?: string
    previewData?: string | null
    createdAt?: Date | string
  }

  export type FashionDesignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dressStyle?: StringFieldUpdateOperationsInput | string
    hairStyle?: StringFieldUpdateOperationsInput | string
    crown?: StringFieldUpdateOperationsInput | string
    wings?: NullableStringFieldUpdateOperationsInput | string | null
    accessory?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    previewData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FashionDesignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dressStyle?: StringFieldUpdateOperationsInput | string
    hairStyle?: StringFieldUpdateOperationsInput | string
    crown?: StringFieldUpdateOperationsInput | string
    wings?: NullableStringFieldUpdateOperationsInput | string | null
    accessory?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    previewData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FashionDesignCreateManyInput = {
    id?: string
    title?: string
    dressStyle: string
    hairStyle: string
    crown: string
    wings?: string | null
    accessory?: string | null
    background?: string
    previewData?: string | null
    createdAt?: Date | string
  }

  export type FashionDesignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dressStyle?: StringFieldUpdateOperationsInput | string
    hairStyle?: StringFieldUpdateOperationsInput | string
    crown?: StringFieldUpdateOperationsInput | string
    wings?: NullableStringFieldUpdateOperationsInput | string | null
    accessory?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    previewData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FashionDesignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dressStyle?: StringFieldUpdateOperationsInput | string
    hairStyle?: StringFieldUpdateOperationsInput | string
    crown?: StringFieldUpdateOperationsInput | string
    wings?: NullableStringFieldUpdateOperationsInput | string | null
    accessory?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    previewData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreCreateInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    createdAt?: Date | string
  }

  export type GameScoreUncheckedCreateInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    createdAt?: Date | string
  }

  export type GameScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreCreateManyInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    createdAt?: Date | string
  }

  export type GameScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretClubBadgeCreateInput = {
    id?: string
    badgeCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubBadgeUncheckedCreateInput = {
    id?: string
    badgeCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubBadgeCreateManyInput = {
    id?: string
    badgeCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoiceMessageCreateInput = {
    id?: string
    fromName?: string
    messageEn: string
    messageAr: string
    icon?: string
    createdAt?: Date | string
  }

  export type VoiceMessageUncheckedCreateInput = {
    id?: string
    fromName?: string
    messageEn: string
    messageAr: string
    icon?: string
    createdAt?: Date | string
  }

  export type VoiceMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromName?: StringFieldUpdateOperationsInput | string
    messageEn?: StringFieldUpdateOperationsInput | string
    messageAr?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromName?: StringFieldUpdateOperationsInput | string
    messageEn?: StringFieldUpdateOperationsInput | string
    messageAr?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceMessageCreateManyInput = {
    id?: string
    fromName?: string
    messageEn: string
    messageAr: string
    icon?: string
    createdAt?: Date | string
  }

  export type VoiceMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromName?: StringFieldUpdateOperationsInput | string
    messageEn?: StringFieldUpdateOperationsInput | string
    messageAr?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromName?: StringFieldUpdateOperationsInput | string
    messageEn?: StringFieldUpdateOperationsInput | string
    messageAr?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    princessName?: string
    princessAge?: number
    favoriteColor?: string
    pinCode?: string
    welcomeVoiceEn?: string
    welcomeVoiceAr?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    princessName?: string
    princessAge?: number
    favoriteColor?: string
    pinCode?: string
    welcomeVoiceEn?: string
    welcomeVoiceAr?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    princessName?: StringFieldUpdateOperationsInput | string
    princessAge?: IntFieldUpdateOperationsInput | number
    favoriteColor?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    welcomeVoiceEn?: StringFieldUpdateOperationsInput | string
    welcomeVoiceAr?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    princessName?: StringFieldUpdateOperationsInput | string
    princessAge?: IntFieldUpdateOperationsInput | number
    favoriteColor?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    welcomeVoiceEn?: StringFieldUpdateOperationsInput | string
    welcomeVoiceAr?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    princessName?: string
    princessAge?: number
    favoriteColor?: string
    pinCode?: string
    welcomeVoiceEn?: string
    welcomeVoiceAr?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    princessName?: StringFieldUpdateOperationsInput | string
    princessAge?: IntFieldUpdateOperationsInput | number
    favoriteColor?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    welcomeVoiceEn?: StringFieldUpdateOperationsInput | string
    welcomeVoiceAr?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    princessName?: StringFieldUpdateOperationsInput | string
    princessAge?: IntFieldUpdateOperationsInput | number
    favoriteColor?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    welcomeVoiceEn?: StringFieldUpdateOperationsInput | string
    welcomeVoiceAr?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DrawingArtworkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistName?: SortOrder
    imageData?: SortOrder
    likesCount?: SortOrder
    stickers?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawingArtworkAvgOrderByAggregateInput = {
    likesCount?: SortOrder
  }

  export type DrawingArtworkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistName?: SortOrder
    imageData?: SortOrder
    likesCount?: SortOrder
    stickers?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawingArtworkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artistName?: SortOrder
    imageData?: SortOrder
    likesCount?: SortOrder
    stickers?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawingArtworkSumOrderByAggregateInput = {
    likesCount?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FashionDesignCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dressStyle?: SortOrder
    hairStyle?: SortOrder
    crown?: SortOrder
    wings?: SortOrder
    accessory?: SortOrder
    background?: SortOrder
    previewData?: SortOrder
    createdAt?: SortOrder
  }

  export type FashionDesignMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dressStyle?: SortOrder
    hairStyle?: SortOrder
    crown?: SortOrder
    wings?: SortOrder
    accessory?: SortOrder
    background?: SortOrder
    previewData?: SortOrder
    createdAt?: SortOrder
  }

  export type FashionDesignMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dressStyle?: SortOrder
    hairStyle?: SortOrder
    crown?: SortOrder
    wings?: SortOrder
    accessory?: SortOrder
    background?: SortOrder
    previewData?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreCountOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
  }

  export type GameScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreMinOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreSumOrderByAggregateInput = {
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SecretClubBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    badgeCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
  }

  export type SecretClubBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    badgeCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
  }

  export type SecretClubBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    badgeCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VoiceMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromName?: SortOrder
    messageEn?: SortOrder
    messageAr?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromName?: SortOrder
    messageEn?: SortOrder
    messageAr?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromName?: SortOrder
    messageEn?: SortOrder
    messageAr?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    princessName?: SortOrder
    princessAge?: SortOrder
    favoriteColor?: SortOrder
    pinCode?: SortOrder
    welcomeVoiceEn?: SortOrder
    welcomeVoiceAr?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    princessAge?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    princessName?: SortOrder
    princessAge?: SortOrder
    favoriteColor?: SortOrder
    pinCode?: SortOrder
    welcomeVoiceEn?: SortOrder
    welcomeVoiceAr?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    princessName?: SortOrder
    princessAge?: SortOrder
    favoriteColor?: SortOrder
    pinCode?: SortOrder
    welcomeVoiceEn?: SortOrder
    welcomeVoiceAr?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    princessAge?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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