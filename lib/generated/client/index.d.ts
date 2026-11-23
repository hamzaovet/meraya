
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Salon
 * 
 */
export type Salon = $Result.DefaultSelection<Prisma.$SalonPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model StaffMember
 * 
 */
export type StaffMember = $Result.DefaultSelection<Prisma.$StaffMemberPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model AppointmentItem
 * 
 */
export type AppointmentItem = $Result.DefaultSelection<Prisma.$AppointmentItemPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model OtpToken
 * 
 */
export type OtpToken = $Result.DefaultSelection<Prisma.$OtpTokenPayload>
/**
 * Model TreasuryTransaction
 * 
 */
export type TreasuryTransaction = $Result.DefaultSelection<Prisma.$TreasuryTransactionPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salon`: Exposes CRUD operations for the **Salon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salons
    * const salons = await prisma.salon.findMany()
    * ```
    */
  get salon(): Prisma.SalonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffMember`: Exposes CRUD operations for the **StaffMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffMembers
    * const staffMembers = await prisma.staffMember.findMany()
    * ```
    */
  get staffMember(): Prisma.StaffMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentItem`: Exposes CRUD operations for the **AppointmentItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentItems
    * const appointmentItems = await prisma.appointmentItem.findMany()
    * ```
    */
  get appointmentItem(): Prisma.AppointmentItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpToken`: Exposes CRUD operations for the **OtpToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpTokens
    * const otpTokens = await prisma.otpToken.findMany()
    * ```
    */
  get otpToken(): Prisma.OtpTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treasuryTransaction`: Exposes CRUD operations for the **TreasuryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreasuryTransactions
    * const treasuryTransactions = await prisma.treasuryTransaction.findMany()
    * ```
    */
  get treasuryTransaction(): Prisma.TreasuryTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Salon: 'Salon',
    Service: 'Service',
    StaffMember: 'StaffMember',
    Customer: 'Customer',
    Appointment: 'Appointment',
    AppointmentItem: 'AppointmentItem',
    GalleryImage: 'GalleryImage',
    Review: 'Review',
    OtpToken: 'OtpToken',
    TreasuryTransaction: 'TreasuryTransaction',
    Setting: 'Setting'
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
      modelProps: "user" | "salon" | "service" | "staffMember" | "customer" | "appointment" | "appointmentItem" | "galleryImage" | "review" | "otpToken" | "treasuryTransaction" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Salon: {
        payload: Prisma.$SalonPayload<ExtArgs>
        fields: Prisma.SalonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findFirst: {
            args: Prisma.SalonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findMany: {
            args: Prisma.SalonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          create: {
            args: Prisma.SalonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          createMany: {
            args: Prisma.SalonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          delete: {
            args: Prisma.SalonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          update: {
            args: Prisma.SalonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          deleteMany: {
            args: Prisma.SalonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          upsert: {
            args: Prisma.SalonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          aggregate: {
            args: Prisma.SalonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalon>
          }
          groupBy: {
            args: Prisma.SalonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonCountArgs<ExtArgs>
            result: $Utils.Optional<SalonCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      StaffMember: {
        payload: Prisma.$StaffMemberPayload<ExtArgs>
        fields: Prisma.StaffMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findFirst: {
            args: Prisma.StaffMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findMany: {
            args: Prisma.StaffMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          create: {
            args: Prisma.StaffMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          createMany: {
            args: Prisma.StaffMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          delete: {
            args: Prisma.StaffMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          update: {
            args: Prisma.StaffMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          deleteMany: {
            args: Prisma.StaffMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          upsert: {
            args: Prisma.StaffMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          aggregate: {
            args: Prisma.StaffMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffMember>
          }
          groupBy: {
            args: Prisma.StaffMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffMemberCountArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      AppointmentItem: {
        payload: Prisma.$AppointmentItemPayload<ExtArgs>
        fields: Prisma.AppointmentItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          findFirst: {
            args: Prisma.AppointmentItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          findMany: {
            args: Prisma.AppointmentItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>[]
          }
          create: {
            args: Prisma.AppointmentItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          createMany: {
            args: Prisma.AppointmentItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>[]
          }
          delete: {
            args: Prisma.AppointmentItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          update: {
            args: Prisma.AppointmentItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentItemPayload>
          }
          aggregate: {
            args: Prisma.AppointmentItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentItem>
          }
          groupBy: {
            args: Prisma.AppointmentItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentItemCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentItemCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      OtpToken: {
        payload: Prisma.$OtpTokenPayload<ExtArgs>
        fields: Prisma.OtpTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          findFirst: {
            args: Prisma.OtpTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          findMany: {
            args: Prisma.OtpTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[]
          }
          create: {
            args: Prisma.OtpTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          createMany: {
            args: Prisma.OtpTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[]
          }
          delete: {
            args: Prisma.OtpTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          update: {
            args: Prisma.OtpTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          deleteMany: {
            args: Prisma.OtpTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>[]
          }
          upsert: {
            args: Prisma.OtpTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpTokenPayload>
          }
          aggregate: {
            args: Prisma.OtpTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpToken>
          }
          groupBy: {
            args: Prisma.OtpTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OtpTokenCountAggregateOutputType> | number
          }
        }
      }
      TreasuryTransaction: {
        payload: Prisma.$TreasuryTransactionPayload<ExtArgs>
        fields: Prisma.TreasuryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreasuryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          findFirst: {
            args: Prisma.TreasuryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreasuryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          findMany: {
            args: Prisma.TreasuryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          create: {
            args: Prisma.TreasuryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          createMany: {
            args: Prisma.TreasuryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreasuryTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          delete: {
            args: Prisma.TreasuryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          update: {
            args: Prisma.TreasuryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.TreasuryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreasuryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          upsert: {
            args: Prisma.TreasuryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          aggregate: {
            args: Prisma.TreasuryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreasuryTransaction>
          }
          groupBy: {
            args: Prisma.TreasuryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreasuryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreasuryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TreasuryTransactionCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
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
    user?: UserOmit
    salon?: SalonOmit
    service?: ServiceOmit
    staffMember?: StaffMemberOmit
    customer?: CustomerOmit
    appointment?: AppointmentOmit
    appointmentItem?: AppointmentItemOmit
    galleryImage?: GalleryImageOmit
    review?: ReviewOmit
    otpToken?: OtpTokenOmit
    treasuryTransaction?: TreasuryTransactionOmit
    setting?: SettingOmit
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
   * Count Type SalonCountOutputType
   */

  export type SalonCountOutputType = {
    services: number
    staff: number
    appointments: number
    gallery: number
    reviews: number
  }

  export type SalonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | SalonCountOutputTypeCountServicesArgs
    staff?: boolean | SalonCountOutputTypeCountStaffArgs
    appointments?: boolean | SalonCountOutputTypeCountAppointmentsArgs
    gallery?: boolean | SalonCountOutputTypeCountGalleryArgs
    reviews?: boolean | SalonCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonCountOutputType
     */
    select?: SalonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffMemberWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointmentItems: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentItems?: boolean | ServiceCountOutputTypeCountAppointmentItemsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentItemWhereInput
  }


  /**
   * Count Type StaffMemberCountOutputType
   */

  export type StaffMemberCountOutputType = {
    appointments: number
  }

  export type StaffMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | StaffMemberCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * StaffMemberCountOutputType without action
   */
  export type StaffMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMemberCountOutputType
     */
    select?: StaffMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffMemberCountOutputType without action
   */
  export type StaffMemberCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentItemWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    appointments: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | CustomerCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    items: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | AppointmentCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    pinCode: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    pinCode: string | null
    name: string | null
    role: string | null
    isActive: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    pinCode: number
    name: number
    role: number
    isActive: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pinCode?: true
    name?: true
    role?: true
    isActive?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pinCode?: true
    name?: true
    role?: true
    isActive?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pinCode?: true
    name?: true
    role?: true
    isActive?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    pinCode: string
    name: string
    role: string
    isActive: boolean
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    pinCode?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    pinCode?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    pinCode?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    pinCode?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "pinCode" | "name" | "role" | "isActive" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      pinCode: string
      name: string
      role: string
      isActive: boolean
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pinCode: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Salon
   */

  export type AggregateSalon = {
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  export type SalonAvgAggregateOutputType = {
    rating: number | null
    reviewCount: number | null
    sortOrder: number | null
  }

  export type SalonSumAggregateOutputType = {
    rating: number | null
    reviewCount: number | null
    sortOrder: number | null
  }

  export type SalonMinAggregateOutputType = {
    id: string | null
    name: string | null
    nameAr: string | null
    slug: string | null
    gender: string | null
    logoUrl: string | null
    coverUrl: string | null
    description: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    city: string | null
    openTime: string | null
    closeTime: string | null
    workDays: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    rating: number | null
    reviewCount: number | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nameAr: string | null
    slug: string | null
    gender: string | null
    logoUrl: string | null
    coverUrl: string | null
    description: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    city: string | null
    openTime: string | null
    closeTime: string | null
    workDays: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    rating: number | null
    reviewCount: number | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalonCountAggregateOutputType = {
    id: number
    name: number
    nameAr: number
    slug: number
    gender: number
    logoUrl: number
    coverUrl: number
    description: number
    phone: number
    whatsapp: number
    address: number
    city: number
    openTime: number
    closeTime: number
    workDays: number
    isActive: number
    isFeatured: number
    rating: number
    reviewCount: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalonAvgAggregateInputType = {
    rating?: true
    reviewCount?: true
    sortOrder?: true
  }

  export type SalonSumAggregateInputType = {
    rating?: true
    reviewCount?: true
    sortOrder?: true
  }

  export type SalonMinAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    slug?: true
    gender?: true
    logoUrl?: true
    coverUrl?: true
    description?: true
    phone?: true
    whatsapp?: true
    address?: true
    city?: true
    openTime?: true
    closeTime?: true
    workDays?: true
    isActive?: true
    isFeatured?: true
    rating?: true
    reviewCount?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalonMaxAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    slug?: true
    gender?: true
    logoUrl?: true
    coverUrl?: true
    description?: true
    phone?: true
    whatsapp?: true
    address?: true
    city?: true
    openTime?: true
    closeTime?: true
    workDays?: true
    isActive?: true
    isFeatured?: true
    rating?: true
    reviewCount?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalonCountAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    slug?: true
    gender?: true
    logoUrl?: true
    coverUrl?: true
    description?: true
    phone?: true
    whatsapp?: true
    address?: true
    city?: true
    openTime?: true
    closeTime?: true
    workDays?: true
    isActive?: true
    isFeatured?: true
    rating?: true
    reviewCount?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salon to aggregate.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salons
    **/
    _count?: true | SalonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonMaxAggregateInputType
  }

  export type GetSalonAggregateType<T extends SalonAggregateArgs> = {
        [P in keyof T & keyof AggregateSalon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalon[P]>
      : GetScalarType<T[P], AggregateSalon[P]>
  }




  export type SalonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithAggregationInput | SalonOrderByWithAggregationInput[]
    by: SalonScalarFieldEnum[] | SalonScalarFieldEnum
    having?: SalonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonCountAggregateInputType | true
    _avg?: SalonAvgAggregateInputType
    _sum?: SalonSumAggregateInputType
    _min?: SalonMinAggregateInputType
    _max?: SalonMaxAggregateInputType
  }

  export type SalonGroupByOutputType = {
    id: string
    name: string
    nameAr: string | null
    slug: string
    gender: string
    logoUrl: string | null
    coverUrl: string | null
    description: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    city: string | null
    openTime: string | null
    closeTime: string | null
    workDays: string | null
    isActive: boolean
    isFeatured: boolean
    rating: number
    reviewCount: number
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  type GetSalonGroupByPayload<T extends SalonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonGroupByOutputType[P]>
            : GetScalarType<T[P], SalonGroupByOutputType[P]>
        }
      >
    >


  export type SalonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    slug?: boolean
    gender?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    description?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    city?: boolean
    openTime?: boolean
    closeTime?: boolean
    workDays?: boolean
    isActive?: boolean
    isFeatured?: boolean
    rating?: boolean
    reviewCount?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Salon$servicesArgs<ExtArgs>
    staff?: boolean | Salon$staffArgs<ExtArgs>
    appointments?: boolean | Salon$appointmentsArgs<ExtArgs>
    gallery?: boolean | Salon$galleryArgs<ExtArgs>
    reviews?: boolean | Salon$reviewsArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    slug?: boolean
    gender?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    description?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    city?: boolean
    openTime?: boolean
    closeTime?: boolean
    workDays?: boolean
    isActive?: boolean
    isFeatured?: boolean
    rating?: boolean
    reviewCount?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    slug?: boolean
    gender?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    description?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    city?: boolean
    openTime?: boolean
    closeTime?: boolean
    workDays?: boolean
    isActive?: boolean
    isFeatured?: boolean
    rating?: boolean
    reviewCount?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectScalar = {
    id?: boolean
    name?: boolean
    nameAr?: boolean
    slug?: boolean
    gender?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    description?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    city?: boolean
    openTime?: boolean
    closeTime?: boolean
    workDays?: boolean
    isActive?: boolean
    isFeatured?: boolean
    rating?: boolean
    reviewCount?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameAr" | "slug" | "gender" | "logoUrl" | "coverUrl" | "description" | "phone" | "whatsapp" | "address" | "city" | "openTime" | "closeTime" | "workDays" | "isActive" | "isFeatured" | "rating" | "reviewCount" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["salon"]>
  export type SalonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Salon$servicesArgs<ExtArgs>
    staff?: boolean | Salon$staffArgs<ExtArgs>
    appointments?: boolean | Salon$appointmentsArgs<ExtArgs>
    gallery?: boolean | Salon$galleryArgs<ExtArgs>
    reviews?: boolean | Salon$reviewsArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salon"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      staff: Prisma.$StaffMemberPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      gallery: Prisma.$GalleryImagePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nameAr: string | null
      slug: string
      gender: string
      logoUrl: string | null
      coverUrl: string | null
      description: string | null
      phone: string | null
      whatsapp: string | null
      address: string | null
      city: string | null
      openTime: string | null
      closeTime: string | null
      workDays: string | null
      isActive: boolean
      isFeatured: boolean
      rating: number
      reviewCount: number
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salon"]>
    composites: {}
  }

  type SalonGetPayload<S extends boolean | null | undefined | SalonDefaultArgs> = $Result.GetResult<Prisma.$SalonPayload, S>

  type SalonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalonCountAggregateInputType | true
    }

  export interface SalonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salon'], meta: { name: 'Salon' } }
    /**
     * Find zero or one Salon that matches the filter.
     * @param {SalonFindUniqueArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonFindUniqueArgs>(args: SelectSubset<T, SalonFindUniqueArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalonFindUniqueOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonFindFirstArgs>(args?: SelectSubset<T, SalonFindFirstArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salons
     * const salons = await prisma.salon.findMany()
     * 
     * // Get first 10 Salons
     * const salons = await prisma.salon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonWithIdOnly = await prisma.salon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonFindManyArgs>(args?: SelectSubset<T, SalonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salon.
     * @param {SalonCreateArgs} args - Arguments to create a Salon.
     * @example
     * // Create one Salon
     * const Salon = await prisma.salon.create({
     *   data: {
     *     // ... data to create a Salon
     *   }
     * })
     * 
     */
    create<T extends SalonCreateArgs>(args: SelectSubset<T, SalonCreateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salons.
     * @param {SalonCreateManyArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonCreateManyArgs>(args?: SelectSubset<T, SalonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salons and returns the data saved in the database.
     * @param {SalonCreateManyAndReturnArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salons and only return the `id`
     * const salonWithIdOnly = await prisma.salon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salon.
     * @param {SalonDeleteArgs} args - Arguments to delete one Salon.
     * @example
     * // Delete one Salon
     * const Salon = await prisma.salon.delete({
     *   where: {
     *     // ... filter to delete one Salon
     *   }
     * })
     * 
     */
    delete<T extends SalonDeleteArgs>(args: SelectSubset<T, SalonDeleteArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salon.
     * @param {SalonUpdateArgs} args - Arguments to update one Salon.
     * @example
     * // Update one Salon
     * const salon = await prisma.salon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonUpdateArgs>(args: SelectSubset<T, SalonUpdateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salons.
     * @param {SalonDeleteManyArgs} args - Arguments to filter Salons to delete.
     * @example
     * // Delete a few Salons
     * const { count } = await prisma.salon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonDeleteManyArgs>(args?: SelectSubset<T, SalonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salons
     * const salon = await prisma.salon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonUpdateManyArgs>(args: SelectSubset<T, SalonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salons and returns the data updated in the database.
     * @param {SalonUpdateManyAndReturnArgs} args - Arguments to update many Salons.
     * @example
     * // Update many Salons
     * const salon = await prisma.salon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salons and only return the `id`
     * const salonWithIdOnly = await prisma.salon.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalonUpdateManyAndReturnArgs>(args: SelectSubset<T, SalonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salon.
     * @param {SalonUpsertArgs} args - Arguments to update or create a Salon.
     * @example
     * // Update or create a Salon
     * const salon = await prisma.salon.upsert({
     *   create: {
     *     // ... data to create a Salon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salon we want to update
     *   }
     * })
     */
    upsert<T extends SalonUpsertArgs>(args: SelectSubset<T, SalonUpsertArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonCountArgs} args - Arguments to filter Salons to count.
     * @example
     * // Count the number of Salons
     * const count = await prisma.salon.count({
     *   where: {
     *     // ... the filter for the Salons we want to count
     *   }
     * })
    **/
    count<T extends SalonCountArgs>(
      args?: Subset<T, SalonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalonAggregateArgs>(args: Subset<T, SalonAggregateArgs>): Prisma.PrismaPromise<GetSalonAggregateType<T>>

    /**
     * Group by Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonGroupByArgs} args - Group by arguments.
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
      T extends SalonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonGroupByArgs['orderBy'] }
        : { orderBy?: SalonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salon model
   */
  readonly fields: SalonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Salon$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Salon$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends Salon$staffArgs<ExtArgs> = {}>(args?: Subset<T, Salon$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Salon$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Salon$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gallery<T extends Salon$galleryArgs<ExtArgs> = {}>(args?: Subset<T, Salon$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Salon$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Salon$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Salon model
   */
  interface SalonFieldRefs {
    readonly id: FieldRef<"Salon", 'String'>
    readonly name: FieldRef<"Salon", 'String'>
    readonly nameAr: FieldRef<"Salon", 'String'>
    readonly slug: FieldRef<"Salon", 'String'>
    readonly gender: FieldRef<"Salon", 'String'>
    readonly logoUrl: FieldRef<"Salon", 'String'>
    readonly coverUrl: FieldRef<"Salon", 'String'>
    readonly description: FieldRef<"Salon", 'String'>
    readonly phone: FieldRef<"Salon", 'String'>
    readonly whatsapp: FieldRef<"Salon", 'String'>
    readonly address: FieldRef<"Salon", 'String'>
    readonly city: FieldRef<"Salon", 'String'>
    readonly openTime: FieldRef<"Salon", 'String'>
    readonly closeTime: FieldRef<"Salon", 'String'>
    readonly workDays: FieldRef<"Salon", 'String'>
    readonly isActive: FieldRef<"Salon", 'Boolean'>
    readonly isFeatured: FieldRef<"Salon", 'Boolean'>
    readonly rating: FieldRef<"Salon", 'Float'>
    readonly reviewCount: FieldRef<"Salon", 'Int'>
    readonly sortOrder: FieldRef<"Salon", 'Int'>
    readonly createdAt: FieldRef<"Salon", 'DateTime'>
    readonly updatedAt: FieldRef<"Salon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Salon findUnique
   */
  export type SalonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findUniqueOrThrow
   */
  export type SalonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findFirst
   */
  export type SalonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findFirstOrThrow
   */
  export type SalonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findMany
   */
  export type SalonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salons to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon create
   */
  export type SalonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to create a Salon.
     */
    data: XOR<SalonCreateInput, SalonUncheckedCreateInput>
  }

  /**
   * Salon createMany
   */
  export type SalonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salon createManyAndReturn
   */
  export type SalonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salon update
   */
  export type SalonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to update a Salon.
     */
    data: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
    /**
     * Choose, which Salon to update.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon updateMany
   */
  export type SalonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salons.
     */
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyInput>
    /**
     * Filter which Salons to update
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to update.
     */
    limit?: number
  }

  /**
   * Salon updateManyAndReturn
   */
  export type SalonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * The data used to update Salons.
     */
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyInput>
    /**
     * Filter which Salons to update
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to update.
     */
    limit?: number
  }

  /**
   * Salon upsert
   */
  export type SalonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The filter to search for the Salon to update in case it exists.
     */
    where: SalonWhereUniqueInput
    /**
     * In case the Salon found by the `where` argument doesn't exist, create a new Salon with this data.
     */
    create: XOR<SalonCreateInput, SalonUncheckedCreateInput>
    /**
     * In case the Salon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
  }

  /**
   * Salon delete
   */
  export type SalonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter which Salon to delete.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon deleteMany
   */
  export type SalonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salons to delete
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to delete.
     */
    limit?: number
  }

  /**
   * Salon.services
   */
  export type Salon$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Salon.staff
   */
  export type Salon$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    where?: StaffMemberWhereInput
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    cursor?: StaffMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * Salon.appointments
   */
  export type Salon$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Salon.gallery
   */
  export type Salon$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    cursor?: GalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * Salon.reviews
   */
  export type Salon$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Salon without action
   */
  export type SalonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    duration: number | null
    price: number | null
    discountPrice: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    duration: number | null
    price: number | null
    discountPrice: number | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    nameAr: string | null
    description: string | null
    gender: string | null
    duration: number | null
    price: number | null
    discountPrice: number | null
    imageUrl: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    nameAr: string | null
    description: string | null
    gender: string | null
    duration: number | null
    price: number | null
    discountPrice: number | null
    imageUrl: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    salonId: number
    name: number
    nameAr: number
    description: number
    gender: number
    duration: number
    price: number
    discountPrice: number
    imageUrl: number
    isActive: number
    isFeatured: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    duration?: true
    price?: true
    discountPrice?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    duration?: true
    price?: true
    discountPrice?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    description?: true
    gender?: true
    duration?: true
    price?: true
    discountPrice?: true
    imageUrl?: true
    isActive?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    description?: true
    gender?: true
    duration?: true
    price?: true
    discountPrice?: true
    imageUrl?: true
    isActive?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    description?: true
    gender?: true
    duration?: true
    price?: true
    discountPrice?: true
    imageUrl?: true
    isActive?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    salonId: string
    name: string
    nameAr: string | null
    description: string | null
    gender: string
    duration: number
    price: number
    discountPrice: number | null
    imageUrl: string | null
    isActive: boolean
    isFeatured: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    description?: boolean
    gender?: boolean
    duration?: boolean
    price?: boolean
    discountPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    appointmentItems?: boolean | Service$appointmentItemsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    description?: boolean
    gender?: boolean
    duration?: boolean
    price?: boolean
    discountPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    description?: boolean
    gender?: boolean
    duration?: boolean
    price?: boolean
    discountPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    description?: boolean
    gender?: boolean
    duration?: boolean
    price?: boolean
    discountPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "name" | "nameAr" | "description" | "gender" | "duration" | "price" | "discountPrice" | "imageUrl" | "isActive" | "isFeatured" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    appointmentItems?: boolean | Service$appointmentItemsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      appointmentItems: Prisma.$AppointmentItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      name: string
      nameAr: string | null
      description: string | null
      gender: string
      duration: number
      price: number
      discountPrice: number | null
      imageUrl: string | null
      isActive: boolean
      isFeatured: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentItems<T extends Service$appointmentItemsArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly salonId: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly nameAr: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly gender: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly discountPrice: FieldRef<"Service", 'Float'>
    readonly imageUrl: FieldRef<"Service", 'String'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly isFeatured: FieldRef<"Service", 'Boolean'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.appointmentItems
   */
  export type Service$appointmentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    where?: AppointmentItemWhereInput
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    cursor?: AppointmentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model StaffMember
   */

  export type AggregateStaffMember = {
    _count: StaffMemberCountAggregateOutputType | null
    _avg: StaffMemberAvgAggregateOutputType | null
    _sum: StaffMemberSumAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  export type StaffMemberAvgAggregateOutputType = {
    rating: number | null
    sortOrder: number | null
  }

  export type StaffMemberSumAggregateOutputType = {
    rating: number | null
    sortOrder: number | null
  }

  export type StaffMemberMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    nameAr: string | null
    title: string | null
    gender: string | null
    phone: string | null
    avatarUrl: string | null
    bio: string | null
    specialties: string | null
    isActive: boolean | null
    rating: number | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMemberMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    nameAr: string | null
    title: string | null
    gender: string | null
    phone: string | null
    avatarUrl: string | null
    bio: string | null
    specialties: string | null
    isActive: boolean | null
    rating: number | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMemberCountAggregateOutputType = {
    id: number
    salonId: number
    name: number
    nameAr: number
    title: number
    gender: number
    phone: number
    avatarUrl: number
    bio: number
    specialties: number
    isActive: number
    rating: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMemberAvgAggregateInputType = {
    rating?: true
    sortOrder?: true
  }

  export type StaffMemberSumAggregateInputType = {
    rating?: true
    sortOrder?: true
  }

  export type StaffMemberMinAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    title?: true
    gender?: true
    phone?: true
    avatarUrl?: true
    bio?: true
    specialties?: true
    isActive?: true
    rating?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMemberMaxAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    title?: true
    gender?: true
    phone?: true
    avatarUrl?: true
    bio?: true
    specialties?: true
    isActive?: true
    rating?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMemberCountAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    nameAr?: true
    title?: true
    gender?: true
    phone?: true
    avatarUrl?: true
    bio?: true
    specialties?: true
    isActive?: true
    rating?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMember to aggregate.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffMembers
    **/
    _count?: true | StaffMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMemberMaxAggregateInputType
  }

  export type GetStaffMemberAggregateType<T extends StaffMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffMember[P]>
      : GetScalarType<T[P], AggregateStaffMember[P]>
  }




  export type StaffMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffMemberWhereInput
    orderBy?: StaffMemberOrderByWithAggregationInput | StaffMemberOrderByWithAggregationInput[]
    by: StaffMemberScalarFieldEnum[] | StaffMemberScalarFieldEnum
    having?: StaffMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffMemberCountAggregateInputType | true
    _avg?: StaffMemberAvgAggregateInputType
    _sum?: StaffMemberSumAggregateInputType
    _min?: StaffMemberMinAggregateInputType
    _max?: StaffMemberMaxAggregateInputType
  }

  export type StaffMemberGroupByOutputType = {
    id: string
    salonId: string
    name: string
    nameAr: string | null
    title: string | null
    gender: string
    phone: string | null
    avatarUrl: string | null
    bio: string | null
    specialties: string | null
    isActive: boolean
    rating: number
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: StaffMemberCountAggregateOutputType | null
    _avg: StaffMemberAvgAggregateOutputType | null
    _sum: StaffMemberSumAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  type GetStaffMemberGroupByPayload<T extends StaffMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
            : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
        }
      >
    >


  export type StaffMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    title?: boolean
    gender?: boolean
    phone?: boolean
    avatarUrl?: boolean
    bio?: boolean
    specialties?: boolean
    isActive?: boolean
    rating?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    appointments?: boolean | StaffMember$appointmentsArgs<ExtArgs>
    _count?: boolean | StaffMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    title?: boolean
    gender?: boolean
    phone?: boolean
    avatarUrl?: boolean
    bio?: boolean
    specialties?: boolean
    isActive?: boolean
    rating?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    title?: boolean
    gender?: boolean
    phone?: boolean
    avatarUrl?: boolean
    bio?: boolean
    specialties?: boolean
    isActive?: boolean
    rating?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectScalar = {
    id?: boolean
    salonId?: boolean
    name?: boolean
    nameAr?: boolean
    title?: boolean
    gender?: boolean
    phone?: boolean
    avatarUrl?: boolean
    bio?: boolean
    specialties?: boolean
    isActive?: boolean
    rating?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "name" | "nameAr" | "title" | "gender" | "phone" | "avatarUrl" | "bio" | "specialties" | "isActive" | "rating" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["staffMember"]>
  export type StaffMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    appointments?: boolean | StaffMember$appointmentsArgs<ExtArgs>
    _count?: boolean | StaffMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type StaffMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $StaffMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffMember"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      appointments: Prisma.$AppointmentItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      name: string
      nameAr: string | null
      title: string | null
      gender: string
      phone: string | null
      avatarUrl: string | null
      bio: string | null
      specialties: string | null
      isActive: boolean
      rating: number
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffMember"]>
    composites: {}
  }

  type StaffMemberGetPayload<S extends boolean | null | undefined | StaffMemberDefaultArgs> = $Result.GetResult<Prisma.$StaffMemberPayload, S>

  type StaffMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffMemberCountAggregateInputType | true
    }

  export interface StaffMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffMember'], meta: { name: 'StaffMember' } }
    /**
     * Find zero or one StaffMember that matches the filter.
     * @param {StaffMemberFindUniqueArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffMemberFindUniqueArgs>(args: SelectSubset<T, StaffMemberFindUniqueArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffMemberFindUniqueOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffMemberFindFirstArgs>(args?: SelectSubset<T, StaffMemberFindFirstArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffMembers
     * const staffMembers = await prisma.staffMember.findMany()
     * 
     * // Get first 10 StaffMembers
     * const staffMembers = await prisma.staffMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffMemberFindManyArgs>(args?: SelectSubset<T, StaffMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffMember.
     * @param {StaffMemberCreateArgs} args - Arguments to create a StaffMember.
     * @example
     * // Create one StaffMember
     * const StaffMember = await prisma.staffMember.create({
     *   data: {
     *     // ... data to create a StaffMember
     *   }
     * })
     * 
     */
    create<T extends StaffMemberCreateArgs>(args: SelectSubset<T, StaffMemberCreateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffMembers.
     * @param {StaffMemberCreateManyArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffMemberCreateManyArgs>(args?: SelectSubset<T, StaffMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffMembers and returns the data saved in the database.
     * @param {StaffMemberCreateManyAndReturnArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffMember.
     * @param {StaffMemberDeleteArgs} args - Arguments to delete one StaffMember.
     * @example
     * // Delete one StaffMember
     * const StaffMember = await prisma.staffMember.delete({
     *   where: {
     *     // ... filter to delete one StaffMember
     *   }
     * })
     * 
     */
    delete<T extends StaffMemberDeleteArgs>(args: SelectSubset<T, StaffMemberDeleteArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffMember.
     * @param {StaffMemberUpdateArgs} args - Arguments to update one StaffMember.
     * @example
     * // Update one StaffMember
     * const staffMember = await prisma.staffMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffMemberUpdateArgs>(args: SelectSubset<T, StaffMemberUpdateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffMembers.
     * @param {StaffMemberDeleteManyArgs} args - Arguments to filter StaffMembers to delete.
     * @example
     * // Delete a few StaffMembers
     * const { count } = await prisma.staffMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffMemberDeleteManyArgs>(args?: SelectSubset<T, StaffMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffMemberUpdateManyArgs>(args: SelectSubset<T, StaffMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers and returns the data updated in the database.
     * @param {StaffMemberUpdateManyAndReturnArgs} args - Arguments to update many StaffMembers.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffMember.
     * @param {StaffMemberUpsertArgs} args - Arguments to update or create a StaffMember.
     * @example
     * // Update or create a StaffMember
     * const staffMember = await prisma.staffMember.upsert({
     *   create: {
     *     // ... data to create a StaffMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffMember we want to update
     *   }
     * })
     */
    upsert<T extends StaffMemberUpsertArgs>(args: SelectSubset<T, StaffMemberUpsertArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberCountArgs} args - Arguments to filter StaffMembers to count.
     * @example
     * // Count the number of StaffMembers
     * const count = await prisma.staffMember.count({
     *   where: {
     *     // ... the filter for the StaffMembers we want to count
     *   }
     * })
    **/
    count<T extends StaffMemberCountArgs>(
      args?: Subset<T, StaffMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffMemberAggregateArgs>(args: Subset<T, StaffMemberAggregateArgs>): Prisma.PrismaPromise<GetStaffMemberAggregateType<T>>

    /**
     * Group by StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberGroupByArgs} args - Group by arguments.
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
      T extends StaffMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffMemberGroupByArgs['orderBy'] }
        : { orderBy?: StaffMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffMember model
   */
  readonly fields: StaffMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends StaffMember$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, StaffMember$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StaffMember model
   */
  interface StaffMemberFieldRefs {
    readonly id: FieldRef<"StaffMember", 'String'>
    readonly salonId: FieldRef<"StaffMember", 'String'>
    readonly name: FieldRef<"StaffMember", 'String'>
    readonly nameAr: FieldRef<"StaffMember", 'String'>
    readonly title: FieldRef<"StaffMember", 'String'>
    readonly gender: FieldRef<"StaffMember", 'String'>
    readonly phone: FieldRef<"StaffMember", 'String'>
    readonly avatarUrl: FieldRef<"StaffMember", 'String'>
    readonly bio: FieldRef<"StaffMember", 'String'>
    readonly specialties: FieldRef<"StaffMember", 'String'>
    readonly isActive: FieldRef<"StaffMember", 'Boolean'>
    readonly rating: FieldRef<"StaffMember", 'Float'>
    readonly sortOrder: FieldRef<"StaffMember", 'Int'>
    readonly createdAt: FieldRef<"StaffMember", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffMember findUnique
   */
  export type StaffMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findUniqueOrThrow
   */
  export type StaffMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findFirst
   */
  export type StaffMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findFirstOrThrow
   */
  export type StaffMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findMany
   */
  export type StaffMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter, which StaffMembers to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember create
   */
  export type StaffMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffMember.
     */
    data: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
  }

  /**
   * StaffMember createMany
   */
  export type StaffMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffMember createManyAndReturn
   */
  export type StaffMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffMember update
   */
  export type StaffMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffMember.
     */
    data: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
    /**
     * Choose, which StaffMember to update.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember updateMany
   */
  export type StaffMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
  }

  /**
   * StaffMember updateManyAndReturn
   */
  export type StaffMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffMember upsert
   */
  export type StaffMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffMember to update in case it exists.
     */
    where: StaffMemberWhereUniqueInput
    /**
     * In case the StaffMember found by the `where` argument doesn't exist, create a new StaffMember with this data.
     */
    create: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
    /**
     * In case the StaffMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
  }

  /**
   * StaffMember delete
   */
  export type StaffMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    /**
     * Filter which StaffMember to delete.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember deleteMany
   */
  export type StaffMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMembers to delete
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to delete.
     */
    limit?: number
  }

  /**
   * StaffMember.appointments
   */
  export type StaffMember$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    where?: AppointmentItemWhereInput
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    cursor?: AppointmentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * StaffMember without action
   */
  export type StaffMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalVisits: number | null
    totalSpent: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalVisits: number | null
    totalSpent: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    gender: string | null
    notes: string | null
    totalVisits: number | null
    totalSpent: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    gender: string | null
    notes: string | null
    totalVisits: number | null
    totalSpent: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    gender: number
    notes: number
    totalVisits: number
    totalSpent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalVisits?: true
    totalSpent?: true
  }

  export type CustomerSumAggregateInputType = {
    totalVisits?: true
    totalSpent?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    gender?: true
    notes?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    gender?: true
    notes?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    gender?: true
    notes?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    gender: string | null
    notes: string | null
    totalVisits: number
    totalSpent: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    notes?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    notes?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    notes?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    gender?: boolean
    notes?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "gender" | "notes" | "totalVisits" | "totalSpent" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      gender: string | null
      notes: string | null
      totalVisits: number
      totalSpent: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Customer$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly totalVisits: FieldRef<"Customer", 'Int'>
    readonly totalSpent: FieldRef<"Customer", 'Float'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.appointments
   */
  export type Customer$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    totalPrice: number | null
    discount: number | null
    finalPrice: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    totalPrice: number | null
    discount: number | null
    finalPrice: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    appointmentNo: string | null
    salonId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    customerGender: string | null
    date: string | null
    timeSlot: string | null
    status: string | null
    totalPrice: number | null
    discount: number | null
    finalPrice: number | null
    paymentStatus: string | null
    paymentMethod: string | null
    notes: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    appointmentNo: string | null
    salonId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    customerGender: string | null
    date: string | null
    timeSlot: string | null
    status: string | null
    totalPrice: number | null
    discount: number | null
    finalPrice: number | null
    paymentStatus: string | null
    paymentMethod: string | null
    notes: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    appointmentNo: number
    salonId: number
    customerId: number
    customerName: number
    customerPhone: number
    customerGender: number
    date: number
    timeSlot: number
    status: number
    totalPrice: number
    discount: number
    finalPrice: number
    paymentStatus: number
    paymentMethod: number
    notes: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    totalPrice?: true
    discount?: true
    finalPrice?: true
  }

  export type AppointmentSumAggregateInputType = {
    totalPrice?: true
    discount?: true
    finalPrice?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    appointmentNo?: true
    salonId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerGender?: true
    date?: true
    timeSlot?: true
    status?: true
    totalPrice?: true
    discount?: true
    finalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    appointmentNo?: true
    salonId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerGender?: true
    date?: true
    timeSlot?: true
    status?: true
    totalPrice?: true
    discount?: true
    finalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    appointmentNo?: true
    salonId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerGender?: true
    date?: true
    timeSlot?: true
    status?: true
    totalPrice?: true
    discount?: true
    finalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    appointmentNo: string
    salonId: string
    customerId: string | null
    customerName: string
    customerPhone: string
    customerGender: string | null
    date: string
    timeSlot: string
    status: string
    totalPrice: number
    discount: number
    finalPrice: number
    paymentStatus: string
    paymentMethod: string | null
    notes: string | null
    source: string
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentNo?: boolean
    salonId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerGender?: boolean
    date?: boolean
    timeSlot?: boolean
    status?: boolean
    totalPrice?: boolean
    discount?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
    items?: boolean | Appointment$itemsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentNo?: boolean
    salonId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerGender?: boolean
    date?: boolean
    timeSlot?: boolean
    status?: boolean
    totalPrice?: boolean
    discount?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentNo?: boolean
    salonId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerGender?: boolean
    date?: boolean
    timeSlot?: boolean
    status?: boolean
    totalPrice?: boolean
    discount?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    appointmentNo?: boolean
    salonId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerGender?: boolean
    date?: boolean
    timeSlot?: boolean
    status?: boolean
    totalPrice?: boolean
    discount?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentNo" | "salonId" | "customerId" | "customerName" | "customerPhone" | "customerGender" | "date" | "timeSlot" | "status" | "totalPrice" | "discount" | "finalPrice" | "paymentStatus" | "paymentMethod" | "notes" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
    items?: boolean | Appointment$itemsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Appointment$customerArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      items: Prisma.$AppointmentItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentNo: string
      salonId: string
      customerId: string | null
      customerName: string
      customerPhone: string
      customerGender: string | null
      date: string
      timeSlot: string
      status: string
      totalPrice: number
      discount: number
      finalPrice: number
      paymentStatus: string
      paymentMethod: string | null
      notes: string | null
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Appointment$customerArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Appointment$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly appointmentNo: FieldRef<"Appointment", 'String'>
    readonly salonId: FieldRef<"Appointment", 'String'>
    readonly customerId: FieldRef<"Appointment", 'String'>
    readonly customerName: FieldRef<"Appointment", 'String'>
    readonly customerPhone: FieldRef<"Appointment", 'String'>
    readonly customerGender: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'String'>
    readonly timeSlot: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly totalPrice: FieldRef<"Appointment", 'Float'>
    readonly discount: FieldRef<"Appointment", 'Float'>
    readonly finalPrice: FieldRef<"Appointment", 'Float'>
    readonly paymentStatus: FieldRef<"Appointment", 'String'>
    readonly paymentMethod: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly source: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.customer
   */
  export type Appointment$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Appointment.items
   */
  export type Appointment$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    where?: AppointmentItemWhereInput
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    cursor?: AppointmentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentItem
   */

  export type AggregateAppointmentItem = {
    _count: AppointmentItemCountAggregateOutputType | null
    _avg: AppointmentItemAvgAggregateOutputType | null
    _sum: AppointmentItemSumAggregateOutputType | null
    _min: AppointmentItemMinAggregateOutputType | null
    _max: AppointmentItemMaxAggregateOutputType | null
  }

  export type AppointmentItemAvgAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type AppointmentItemSumAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type AppointmentItemMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    serviceId: string | null
    staffId: string | null
    serviceName: string | null
    staffName: string | null
    price: number | null
    duration: number | null
  }

  export type AppointmentItemMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    serviceId: string | null
    staffId: string | null
    serviceName: string | null
    staffName: string | null
    price: number | null
    duration: number | null
  }

  export type AppointmentItemCountAggregateOutputType = {
    id: number
    appointmentId: number
    serviceId: number
    staffId: number
    serviceName: number
    staffName: number
    price: number
    duration: number
    _all: number
  }


  export type AppointmentItemAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type AppointmentItemSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type AppointmentItemMinAggregateInputType = {
    id?: true
    appointmentId?: true
    serviceId?: true
    staffId?: true
    serviceName?: true
    staffName?: true
    price?: true
    duration?: true
  }

  export type AppointmentItemMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    serviceId?: true
    staffId?: true
    serviceName?: true
    staffName?: true
    price?: true
    duration?: true
  }

  export type AppointmentItemCountAggregateInputType = {
    id?: true
    appointmentId?: true
    serviceId?: true
    staffId?: true
    serviceName?: true
    staffName?: true
    price?: true
    duration?: true
    _all?: true
  }

  export type AppointmentItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentItem to aggregate.
     */
    where?: AppointmentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentItems to fetch.
     */
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentItems
    **/
    _count?: true | AppointmentItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentItemMaxAggregateInputType
  }

  export type GetAppointmentItemAggregateType<T extends AppointmentItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentItem[P]>
      : GetScalarType<T[P], AggregateAppointmentItem[P]>
  }




  export type AppointmentItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentItemWhereInput
    orderBy?: AppointmentItemOrderByWithAggregationInput | AppointmentItemOrderByWithAggregationInput[]
    by: AppointmentItemScalarFieldEnum[] | AppointmentItemScalarFieldEnum
    having?: AppointmentItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentItemCountAggregateInputType | true
    _avg?: AppointmentItemAvgAggregateInputType
    _sum?: AppointmentItemSumAggregateInputType
    _min?: AppointmentItemMinAggregateInputType
    _max?: AppointmentItemMaxAggregateInputType
  }

  export type AppointmentItemGroupByOutputType = {
    id: string
    appointmentId: string
    serviceId: string | null
    staffId: string | null
    serviceName: string
    staffName: string | null
    price: number
    duration: number
    _count: AppointmentItemCountAggregateOutputType | null
    _avg: AppointmentItemAvgAggregateOutputType | null
    _sum: AppointmentItemSumAggregateOutputType | null
    _min: AppointmentItemMinAggregateOutputType | null
    _max: AppointmentItemMaxAggregateOutputType | null
  }

  type GetAppointmentItemGroupByPayload<T extends AppointmentItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentItemGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentItemGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    serviceId?: boolean
    staffId?: boolean
    serviceName?: boolean
    staffName?: boolean
    price?: boolean
    duration?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentItem"]>

  export type AppointmentItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    serviceId?: boolean
    staffId?: boolean
    serviceName?: boolean
    staffName?: boolean
    price?: boolean
    duration?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentItem"]>

  export type AppointmentItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    serviceId?: boolean
    staffId?: boolean
    serviceName?: boolean
    staffName?: boolean
    price?: boolean
    duration?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentItem"]>

  export type AppointmentItemSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    serviceId?: boolean
    staffId?: boolean
    serviceName?: boolean
    staffName?: boolean
    price?: boolean
    duration?: boolean
  }

  export type AppointmentItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "serviceId" | "staffId" | "serviceName" | "staffName" | "price" | "duration", ExtArgs["result"]["appointmentItem"]>
  export type AppointmentItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }
  export type AppointmentItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }
  export type AppointmentItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    service?: boolean | AppointmentItem$serviceArgs<ExtArgs>
    staff?: boolean | AppointmentItem$staffArgs<ExtArgs>
  }

  export type $AppointmentItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentItem"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
      staff: Prisma.$StaffMemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      serviceId: string | null
      staffId: string | null
      serviceName: string
      staffName: string | null
      price: number
      duration: number
    }, ExtArgs["result"]["appointmentItem"]>
    composites: {}
  }

  type AppointmentItemGetPayload<S extends boolean | null | undefined | AppointmentItemDefaultArgs> = $Result.GetResult<Prisma.$AppointmentItemPayload, S>

  type AppointmentItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentItemCountAggregateInputType | true
    }

  export interface AppointmentItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentItem'], meta: { name: 'AppointmentItem' } }
    /**
     * Find zero or one AppointmentItem that matches the filter.
     * @param {AppointmentItemFindUniqueArgs} args - Arguments to find a AppointmentItem
     * @example
     * // Get one AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentItemFindUniqueArgs>(args: SelectSubset<T, AppointmentItemFindUniqueArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentItemFindUniqueOrThrowArgs} args - Arguments to find a AppointmentItem
     * @example
     * // Get one AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemFindFirstArgs} args - Arguments to find a AppointmentItem
     * @example
     * // Get one AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentItemFindFirstArgs>(args?: SelectSubset<T, AppointmentItemFindFirstArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemFindFirstOrThrowArgs} args - Arguments to find a AppointmentItem
     * @example
     * // Get one AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentItems
     * const appointmentItems = await prisma.appointmentItem.findMany()
     * 
     * // Get first 10 AppointmentItems
     * const appointmentItems = await prisma.appointmentItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentItemWithIdOnly = await prisma.appointmentItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentItemFindManyArgs>(args?: SelectSubset<T, AppointmentItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentItem.
     * @param {AppointmentItemCreateArgs} args - Arguments to create a AppointmentItem.
     * @example
     * // Create one AppointmentItem
     * const AppointmentItem = await prisma.appointmentItem.create({
     *   data: {
     *     // ... data to create a AppointmentItem
     *   }
     * })
     * 
     */
    create<T extends AppointmentItemCreateArgs>(args: SelectSubset<T, AppointmentItemCreateArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentItems.
     * @param {AppointmentItemCreateManyArgs} args - Arguments to create many AppointmentItems.
     * @example
     * // Create many AppointmentItems
     * const appointmentItem = await prisma.appointmentItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentItemCreateManyArgs>(args?: SelectSubset<T, AppointmentItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointmentItems and returns the data saved in the database.
     * @param {AppointmentItemCreateManyAndReturnArgs} args - Arguments to create many AppointmentItems.
     * @example
     * // Create many AppointmentItems
     * const appointmentItem = await prisma.appointmentItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointmentItems and only return the `id`
     * const appointmentItemWithIdOnly = await prisma.appointmentItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointmentItem.
     * @param {AppointmentItemDeleteArgs} args - Arguments to delete one AppointmentItem.
     * @example
     * // Delete one AppointmentItem
     * const AppointmentItem = await prisma.appointmentItem.delete({
     *   where: {
     *     // ... filter to delete one AppointmentItem
     *   }
     * })
     * 
     */
    delete<T extends AppointmentItemDeleteArgs>(args: SelectSubset<T, AppointmentItemDeleteArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentItem.
     * @param {AppointmentItemUpdateArgs} args - Arguments to update one AppointmentItem.
     * @example
     * // Update one AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentItemUpdateArgs>(args: SelectSubset<T, AppointmentItemUpdateArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentItems.
     * @param {AppointmentItemDeleteManyArgs} args - Arguments to filter AppointmentItems to delete.
     * @example
     * // Delete a few AppointmentItems
     * const { count } = await prisma.appointmentItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentItemDeleteManyArgs>(args?: SelectSubset<T, AppointmentItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentItems
     * const appointmentItem = await prisma.appointmentItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentItemUpdateManyArgs>(args: SelectSubset<T, AppointmentItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentItems and returns the data updated in the database.
     * @param {AppointmentItemUpdateManyAndReturnArgs} args - Arguments to update many AppointmentItems.
     * @example
     * // Update many AppointmentItems
     * const appointmentItem = await prisma.appointmentItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointmentItems and only return the `id`
     * const appointmentItemWithIdOnly = await prisma.appointmentItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentItemUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointmentItem.
     * @param {AppointmentItemUpsertArgs} args - Arguments to update or create a AppointmentItem.
     * @example
     * // Update or create a AppointmentItem
     * const appointmentItem = await prisma.appointmentItem.upsert({
     *   create: {
     *     // ... data to create a AppointmentItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentItem we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentItemUpsertArgs>(args: SelectSubset<T, AppointmentItemUpsertArgs<ExtArgs>>): Prisma__AppointmentItemClient<$Result.GetResult<Prisma.$AppointmentItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemCountArgs} args - Arguments to filter AppointmentItems to count.
     * @example
     * // Count the number of AppointmentItems
     * const count = await prisma.appointmentItem.count({
     *   where: {
     *     // ... the filter for the AppointmentItems we want to count
     *   }
     * })
    **/
    count<T extends AppointmentItemCountArgs>(
      args?: Subset<T, AppointmentItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentItemAggregateArgs>(args: Subset<T, AppointmentItemAggregateArgs>): Prisma.PrismaPromise<GetAppointmentItemAggregateType<T>>

    /**
     * Group by AppointmentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentItemGroupByArgs} args - Group by arguments.
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
      T extends AppointmentItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentItemGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentItem model
   */
  readonly fields: AppointmentItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends AppointmentItem$serviceArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentItem$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends AppointmentItem$staffArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentItem$staffArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentItem model
   */
  interface AppointmentItemFieldRefs {
    readonly id: FieldRef<"AppointmentItem", 'String'>
    readonly appointmentId: FieldRef<"AppointmentItem", 'String'>
    readonly serviceId: FieldRef<"AppointmentItem", 'String'>
    readonly staffId: FieldRef<"AppointmentItem", 'String'>
    readonly serviceName: FieldRef<"AppointmentItem", 'String'>
    readonly staffName: FieldRef<"AppointmentItem", 'String'>
    readonly price: FieldRef<"AppointmentItem", 'Float'>
    readonly duration: FieldRef<"AppointmentItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentItem findUnique
   */
  export type AppointmentItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentItem to fetch.
     */
    where: AppointmentItemWhereUniqueInput
  }

  /**
   * AppointmentItem findUniqueOrThrow
   */
  export type AppointmentItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentItem to fetch.
     */
    where: AppointmentItemWhereUniqueInput
  }

  /**
   * AppointmentItem findFirst
   */
  export type AppointmentItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentItem to fetch.
     */
    where?: AppointmentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentItems to fetch.
     */
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentItems.
     */
    cursor?: AppointmentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentItems.
     */
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * AppointmentItem findFirstOrThrow
   */
  export type AppointmentItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentItem to fetch.
     */
    where?: AppointmentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentItems to fetch.
     */
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentItems.
     */
    cursor?: AppointmentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentItems.
     */
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * AppointmentItem findMany
   */
  export type AppointmentItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentItems to fetch.
     */
    where?: AppointmentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentItems to fetch.
     */
    orderBy?: AppointmentItemOrderByWithRelationInput | AppointmentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentItems.
     */
    cursor?: AppointmentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentItems.
     */
    distinct?: AppointmentItemScalarFieldEnum | AppointmentItemScalarFieldEnum[]
  }

  /**
   * AppointmentItem create
   */
  export type AppointmentItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentItem.
     */
    data: XOR<AppointmentItemCreateInput, AppointmentItemUncheckedCreateInput>
  }

  /**
   * AppointmentItem createMany
   */
  export type AppointmentItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentItems.
     */
    data: AppointmentItemCreateManyInput | AppointmentItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentItem createManyAndReturn
   */
  export type AppointmentItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * The data used to create many AppointmentItems.
     */
    data: AppointmentItemCreateManyInput | AppointmentItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentItem update
   */
  export type AppointmentItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentItem.
     */
    data: XOR<AppointmentItemUpdateInput, AppointmentItemUncheckedUpdateInput>
    /**
     * Choose, which AppointmentItem to update.
     */
    where: AppointmentItemWhereUniqueInput
  }

  /**
   * AppointmentItem updateMany
   */
  export type AppointmentItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentItems.
     */
    data: XOR<AppointmentItemUpdateManyMutationInput, AppointmentItemUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentItems to update
     */
    where?: AppointmentItemWhereInput
    /**
     * Limit how many AppointmentItems to update.
     */
    limit?: number
  }

  /**
   * AppointmentItem updateManyAndReturn
   */
  export type AppointmentItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * The data used to update AppointmentItems.
     */
    data: XOR<AppointmentItemUpdateManyMutationInput, AppointmentItemUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentItems to update
     */
    where?: AppointmentItemWhereInput
    /**
     * Limit how many AppointmentItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentItem upsert
   */
  export type AppointmentItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentItem to update in case it exists.
     */
    where: AppointmentItemWhereUniqueInput
    /**
     * In case the AppointmentItem found by the `where` argument doesn't exist, create a new AppointmentItem with this data.
     */
    create: XOR<AppointmentItemCreateInput, AppointmentItemUncheckedCreateInput>
    /**
     * In case the AppointmentItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentItemUpdateInput, AppointmentItemUncheckedUpdateInput>
  }

  /**
   * AppointmentItem delete
   */
  export type AppointmentItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
    /**
     * Filter which AppointmentItem to delete.
     */
    where: AppointmentItemWhereUniqueInput
  }

  /**
   * AppointmentItem deleteMany
   */
  export type AppointmentItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentItems to delete
     */
    where?: AppointmentItemWhereInput
    /**
     * Limit how many AppointmentItems to delete.
     */
    limit?: number
  }

  /**
   * AppointmentItem.service
   */
  export type AppointmentItem$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * AppointmentItem.staff
   */
  export type AppointmentItem$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffMemberInclude<ExtArgs> | null
    where?: StaffMemberWhereInput
  }

  /**
   * AppointmentItem without action
   */
  export type AppointmentItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentItem
     */
    select?: AppointmentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentItem
     */
    omit?: AppointmentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentItemInclude<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type GalleryImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    url: string | null
    caption: string | null
    gender: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    url: string | null
    caption: string | null
    gender: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    salonId: number
    url: number
    caption: number
    gender: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type GalleryImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type GalleryImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type GalleryImageMinAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    caption?: true
    gender?: true
    sortOrder?: true
    createdAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    caption?: true
    gender?: true
    sortOrder?: true
    createdAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    caption?: true
    gender?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _avg?: GalleryImageAvgAggregateInputType
    _sum?: GalleryImageSumAggregateInputType
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: string
    salonId: string
    url: string
    caption: string | null
    gender: string
    sortOrder: number
    createdAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    caption?: boolean
    gender?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    caption?: boolean
    gender?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    caption?: boolean
    gender?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectScalar = {
    id?: boolean
    salonId?: boolean
    url?: boolean
    caption?: boolean
    gender?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type GalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "url" | "caption" | "gender" | "sortOrder" | "createdAt", ExtArgs["result"]["galleryImage"]>
  export type GalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type GalleryImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type GalleryImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      url: string
      caption: string | null
      gender: string
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryImages and returns the data saved in the database.
     * @param {GalleryImageCreateManyAndReturnArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages and returns the data updated in the database.
     * @param {GalleryImageUpdateManyAndReturnArgs} args - Arguments to update many GalleryImages.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
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
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GalleryImage model
   */
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'String'>
    readonly salonId: FieldRef<"GalleryImage", 'String'>
    readonly url: FieldRef<"GalleryImage", 'String'>
    readonly caption: FieldRef<"GalleryImage", 'String'>
    readonly gender: FieldRef<"GalleryImage", 'String'>
    readonly sortOrder: FieldRef<"GalleryImage", 'Int'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage createManyAndReturn
   */
  export type GalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage updateManyAndReturn
   */
  export type GalleryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to delete.
     */
    limit?: number
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    customerName: string | null
    rating: number | null
    comment: string | null
    gender: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    customerName: string | null
    rating: number | null
    comment: string | null
    gender: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    salonId: number
    customerName: number
    rating: number
    comment: number
    gender: number
    isApproved: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    salonId?: true
    customerName?: true
    rating?: true
    comment?: true
    gender?: true
    isApproved?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    salonId?: true
    customerName?: true
    rating?: true
    comment?: true
    gender?: true
    isApproved?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    salonId?: true
    customerName?: true
    rating?: true
    comment?: true
    gender?: true
    isApproved?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    salonId: string
    customerName: string
    rating: number
    comment: string
    gender: string | null
    isApproved: boolean
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    customerName?: boolean
    rating?: boolean
    comment?: boolean
    gender?: boolean
    isApproved?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    customerName?: boolean
    rating?: boolean
    comment?: boolean
    gender?: boolean
    isApproved?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    customerName?: boolean
    rating?: boolean
    comment?: boolean
    gender?: boolean
    isApproved?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    salonId?: boolean
    customerName?: boolean
    rating?: boolean
    comment?: boolean
    gender?: boolean
    isApproved?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "customerName" | "rating" | "comment" | "gender" | "isApproved" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      customerName: string
      rating: number
      comment: string
      gender: string | null
      isApproved: boolean
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly salonId: FieldRef<"Review", 'String'>
    readonly customerName: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly gender: FieldRef<"Review", 'String'>
    readonly isApproved: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model OtpToken
   */

  export type AggregateOtpToken = {
    _count: OtpTokenCountAggregateOutputType | null
    _min: OtpTokenMinAggregateOutputType | null
    _max: OtpTokenMaxAggregateOutputType | null
  }

  export type OtpTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    purpose: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    purpose: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpTokenCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    purpose: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type OtpTokenMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    purpose?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type OtpTokenMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    purpose?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type OtpTokenCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    purpose?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type OtpTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpToken to aggregate.
     */
    where?: OtpTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?: OtpTokenOrderByWithRelationInput | OtpTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpTokens
    **/
    _count?: true | OtpTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpTokenMaxAggregateInputType
  }

  export type GetOtpTokenAggregateType<T extends OtpTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpToken[P]>
      : GetScalarType<T[P], AggregateOtpToken[P]>
  }




  export type OtpTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpTokenWhereInput
    orderBy?: OtpTokenOrderByWithAggregationInput | OtpTokenOrderByWithAggregationInput[]
    by: OtpTokenScalarFieldEnum[] | OtpTokenScalarFieldEnum
    having?: OtpTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpTokenCountAggregateInputType | true
    _min?: OtpTokenMinAggregateInputType
    _max?: OtpTokenMaxAggregateInputType
  }

  export type OtpTokenGroupByOutputType = {
    id: string
    email: string
    otp: string
    purpose: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: OtpTokenCountAggregateOutputType | null
    _min: OtpTokenMinAggregateOutputType | null
    _max: OtpTokenMaxAggregateOutputType | null
  }

  type GetOtpTokenGroupByPayload<T extends OtpTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OtpTokenGroupByOutputType[P]>
        }
      >
    >


  export type OtpTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    purpose?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpToken"]>

  export type OtpTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    purpose?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpToken"]>

  export type OtpTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    purpose?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpToken"]>

  export type OtpTokenSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    purpose?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type OtpTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "purpose" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["otpToken"]>

  export type $OtpTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      purpose: string
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpToken"]>
    composites: {}
  }

  type OtpTokenGetPayload<S extends boolean | null | undefined | OtpTokenDefaultArgs> = $Result.GetResult<Prisma.$OtpTokenPayload, S>

  type OtpTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpTokenCountAggregateInputType | true
    }

  export interface OtpTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpToken'], meta: { name: 'OtpToken' } }
    /**
     * Find zero or one OtpToken that matches the filter.
     * @param {OtpTokenFindUniqueArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpTokenFindUniqueArgs>(args: SelectSubset<T, OtpTokenFindUniqueArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpTokenFindUniqueOrThrowArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindFirstArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpTokenFindFirstArgs>(args?: SelectSubset<T, OtpTokenFindFirstArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindFirstOrThrowArgs} args - Arguments to find a OtpToken
     * @example
     * // Get one OtpToken
     * const otpToken = await prisma.otpToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpTokens
     * const otpTokens = await prisma.otpToken.findMany()
     * 
     * // Get first 10 OtpTokens
     * const otpTokens = await prisma.otpToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpTokenFindManyArgs>(args?: SelectSubset<T, OtpTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpToken.
     * @param {OtpTokenCreateArgs} args - Arguments to create a OtpToken.
     * @example
     * // Create one OtpToken
     * const OtpToken = await prisma.otpToken.create({
     *   data: {
     *     // ... data to create a OtpToken
     *   }
     * })
     * 
     */
    create<T extends OtpTokenCreateArgs>(args: SelectSubset<T, OtpTokenCreateArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpTokens.
     * @param {OtpTokenCreateManyArgs} args - Arguments to create many OtpTokens.
     * @example
     * // Create many OtpTokens
     * const otpToken = await prisma.otpToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpTokenCreateManyArgs>(args?: SelectSubset<T, OtpTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpTokens and returns the data saved in the database.
     * @param {OtpTokenCreateManyAndReturnArgs} args - Arguments to create many OtpTokens.
     * @example
     * // Create many OtpTokens
     * const otpToken = await prisma.otpToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpTokens and only return the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpToken.
     * @param {OtpTokenDeleteArgs} args - Arguments to delete one OtpToken.
     * @example
     * // Delete one OtpToken
     * const OtpToken = await prisma.otpToken.delete({
     *   where: {
     *     // ... filter to delete one OtpToken
     *   }
     * })
     * 
     */
    delete<T extends OtpTokenDeleteArgs>(args: SelectSubset<T, OtpTokenDeleteArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpToken.
     * @param {OtpTokenUpdateArgs} args - Arguments to update one OtpToken.
     * @example
     * // Update one OtpToken
     * const otpToken = await prisma.otpToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpTokenUpdateArgs>(args: SelectSubset<T, OtpTokenUpdateArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpTokens.
     * @param {OtpTokenDeleteManyArgs} args - Arguments to filter OtpTokens to delete.
     * @example
     * // Delete a few OtpTokens
     * const { count } = await prisma.otpToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpTokenDeleteManyArgs>(args?: SelectSubset<T, OtpTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpTokens
     * const otpToken = await prisma.otpToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpTokenUpdateManyArgs>(args: SelectSubset<T, OtpTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpTokens and returns the data updated in the database.
     * @param {OtpTokenUpdateManyAndReturnArgs} args - Arguments to update many OtpTokens.
     * @example
     * // Update many OtpTokens
     * const otpToken = await prisma.otpToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpTokens and only return the `id`
     * const otpTokenWithIdOnly = await prisma.otpToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpToken.
     * @param {OtpTokenUpsertArgs} args - Arguments to update or create a OtpToken.
     * @example
     * // Update or create a OtpToken
     * const otpToken = await prisma.otpToken.upsert({
     *   create: {
     *     // ... data to create a OtpToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpToken we want to update
     *   }
     * })
     */
    upsert<T extends OtpTokenUpsertArgs>(args: SelectSubset<T, OtpTokenUpsertArgs<ExtArgs>>): Prisma__OtpTokenClient<$Result.GetResult<Prisma.$OtpTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenCountArgs} args - Arguments to filter OtpTokens to count.
     * @example
     * // Count the number of OtpTokens
     * const count = await prisma.otpToken.count({
     *   where: {
     *     // ... the filter for the OtpTokens we want to count
     *   }
     * })
    **/
    count<T extends OtpTokenCountArgs>(
      args?: Subset<T, OtpTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpTokenAggregateArgs>(args: Subset<T, OtpTokenAggregateArgs>): Prisma.PrismaPromise<GetOtpTokenAggregateType<T>>

    /**
     * Group by OtpToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpTokenGroupByArgs} args - Group by arguments.
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
      T extends OtpTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpTokenGroupByArgs['orderBy'] }
        : { orderBy?: OtpTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpToken model
   */
  readonly fields: OtpTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OtpToken model
   */
  interface OtpTokenFieldRefs {
    readonly id: FieldRef<"OtpToken", 'String'>
    readonly email: FieldRef<"OtpToken", 'String'>
    readonly otp: FieldRef<"OtpToken", 'String'>
    readonly purpose: FieldRef<"OtpToken", 'String'>
    readonly expiresAt: FieldRef<"OtpToken", 'DateTime'>
    readonly used: FieldRef<"OtpToken", 'Boolean'>
    readonly createdAt: FieldRef<"OtpToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpToken findUnique
   */
  export type OtpTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter, which OtpToken to fetch.
     */
    where: OtpTokenWhereUniqueInput
  }

  /**
   * OtpToken findUniqueOrThrow
   */
  export type OtpTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter, which OtpToken to fetch.
     */
    where: OtpTokenWhereUniqueInput
  }

  /**
   * OtpToken findFirst
   */
  export type OtpTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter, which OtpToken to fetch.
     */
    where?: OtpTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?: OtpTokenOrderByWithRelationInput | OtpTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpTokens.
     */
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[]
  }

  /**
   * OtpToken findFirstOrThrow
   */
  export type OtpTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter, which OtpToken to fetch.
     */
    where?: OtpTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?: OtpTokenOrderByWithRelationInput | OtpTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpTokens.
     */
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[]
  }

  /**
   * OtpToken findMany
   */
  export type OtpTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter, which OtpTokens to fetch.
     */
    where?: OtpTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpTokens to fetch.
     */
    orderBy?: OtpTokenOrderByWithRelationInput | OtpTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpTokens.
     */
    cursor?: OtpTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpTokens.
     */
    distinct?: OtpTokenScalarFieldEnum | OtpTokenScalarFieldEnum[]
  }

  /**
   * OtpToken create
   */
  export type OtpTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a OtpToken.
     */
    data: XOR<OtpTokenCreateInput, OtpTokenUncheckedCreateInput>
  }

  /**
   * OtpToken createMany
   */
  export type OtpTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpTokens.
     */
    data: OtpTokenCreateManyInput | OtpTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpToken createManyAndReturn
   */
  export type OtpTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * The data used to create many OtpTokens.
     */
    data: OtpTokenCreateManyInput | OtpTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpToken update
   */
  export type OtpTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a OtpToken.
     */
    data: XOR<OtpTokenUpdateInput, OtpTokenUncheckedUpdateInput>
    /**
     * Choose, which OtpToken to update.
     */
    where: OtpTokenWhereUniqueInput
  }

  /**
   * OtpToken updateMany
   */
  export type OtpTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpTokens.
     */
    data: XOR<OtpTokenUpdateManyMutationInput, OtpTokenUncheckedUpdateManyInput>
    /**
     * Filter which OtpTokens to update
     */
    where?: OtpTokenWhereInput
    /**
     * Limit how many OtpTokens to update.
     */
    limit?: number
  }

  /**
   * OtpToken updateManyAndReturn
   */
  export type OtpTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * The data used to update OtpTokens.
     */
    data: XOR<OtpTokenUpdateManyMutationInput, OtpTokenUncheckedUpdateManyInput>
    /**
     * Filter which OtpTokens to update
     */
    where?: OtpTokenWhereInput
    /**
     * Limit how many OtpTokens to update.
     */
    limit?: number
  }

  /**
   * OtpToken upsert
   */
  export type OtpTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the OtpToken to update in case it exists.
     */
    where: OtpTokenWhereUniqueInput
    /**
     * In case the OtpToken found by the `where` argument doesn't exist, create a new OtpToken with this data.
     */
    create: XOR<OtpTokenCreateInput, OtpTokenUncheckedCreateInput>
    /**
     * In case the OtpToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpTokenUpdateInput, OtpTokenUncheckedUpdateInput>
  }

  /**
   * OtpToken delete
   */
  export type OtpTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
    /**
     * Filter which OtpToken to delete.
     */
    where: OtpTokenWhereUniqueInput
  }

  /**
   * OtpToken deleteMany
   */
  export type OtpTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpTokens to delete
     */
    where?: OtpTokenWhereInput
    /**
     * Limit how many OtpTokens to delete.
     */
    limit?: number
  }

  /**
   * OtpToken without action
   */
  export type OtpTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpToken
     */
    select?: OtpTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpToken
     */
    omit?: OtpTokenOmit<ExtArgs> | null
  }


  /**
   * Model TreasuryTransaction
   */

  export type AggregateTreasuryTransaction = {
    _count: TreasuryTransactionCountAggregateOutputType | null
    _avg: TreasuryTransactionAvgAggregateOutputType | null
    _sum: TreasuryTransactionSumAggregateOutputType | null
    _min: TreasuryTransactionMinAggregateOutputType | null
    _max: TreasuryTransactionMaxAggregateOutputType | null
  }

  export type TreasuryTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TreasuryTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TreasuryTransactionMinAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    description: string | null
    reference: string | null
    paymentMethod: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TreasuryTransactionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    description: string | null
    reference: string | null
    paymentMethod: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TreasuryTransactionCountAggregateOutputType = {
    id: number
    type: number
    category: number
    amount: number
    description: number
    reference: number
    paymentMethod: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type TreasuryTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TreasuryTransactionSumAggregateInputType = {
    amount?: true
  }

  export type TreasuryTransactionMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference?: true
    paymentMethod?: true
    createdBy?: true
    createdAt?: true
  }

  export type TreasuryTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference?: true
    paymentMethod?: true
    createdBy?: true
    createdAt?: true
  }

  export type TreasuryTransactionCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference?: true
    paymentMethod?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type TreasuryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryTransaction to aggregate.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreasuryTransactions
    **/
    _count?: true | TreasuryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreasuryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreasuryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreasuryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreasuryTransactionMaxAggregateInputType
  }

  export type GetTreasuryTransactionAggregateType<T extends TreasuryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTreasuryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreasuryTransaction[P]>
      : GetScalarType<T[P], AggregateTreasuryTransaction[P]>
  }




  export type TreasuryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryTransactionWhereInput
    orderBy?: TreasuryTransactionOrderByWithAggregationInput | TreasuryTransactionOrderByWithAggregationInput[]
    by: TreasuryTransactionScalarFieldEnum[] | TreasuryTransactionScalarFieldEnum
    having?: TreasuryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreasuryTransactionCountAggregateInputType | true
    _avg?: TreasuryTransactionAvgAggregateInputType
    _sum?: TreasuryTransactionSumAggregateInputType
    _min?: TreasuryTransactionMinAggregateInputType
    _max?: TreasuryTransactionMaxAggregateInputType
  }

  export type TreasuryTransactionGroupByOutputType = {
    id: string
    type: string
    category: string
    amount: number
    description: string
    reference: string | null
    paymentMethod: string
    createdBy: string
    createdAt: Date
    _count: TreasuryTransactionCountAggregateOutputType | null
    _avg: TreasuryTransactionAvgAggregateOutputType | null
    _sum: TreasuryTransactionSumAggregateOutputType | null
    _min: TreasuryTransactionMinAggregateOutputType | null
    _max: TreasuryTransactionMaxAggregateOutputType | null
  }

  type GetTreasuryTransactionGroupByPayload<T extends TreasuryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreasuryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreasuryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreasuryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TreasuryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type TreasuryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    paymentMethod?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    paymentMethod?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    paymentMethod?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    paymentMethod?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type TreasuryTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "amount" | "description" | "reference" | "paymentMethod" | "createdBy" | "createdAt", ExtArgs["result"]["treasuryTransaction"]>

  export type $TreasuryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreasuryTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      category: string
      amount: number
      description: string
      reference: string | null
      paymentMethod: string
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["treasuryTransaction"]>
    composites: {}
  }

  type TreasuryTransactionGetPayload<S extends boolean | null | undefined | TreasuryTransactionDefaultArgs> = $Result.GetResult<Prisma.$TreasuryTransactionPayload, S>

  type TreasuryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreasuryTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreasuryTransactionCountAggregateInputType | true
    }

  export interface TreasuryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreasuryTransaction'], meta: { name: 'TreasuryTransaction' } }
    /**
     * Find zero or one TreasuryTransaction that matches the filter.
     * @param {TreasuryTransactionFindUniqueArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreasuryTransactionFindUniqueArgs>(args: SelectSubset<T, TreasuryTransactionFindUniqueArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreasuryTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreasuryTransactionFindUniqueOrThrowArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreasuryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindFirstArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreasuryTransactionFindFirstArgs>(args?: SelectSubset<T, TreasuryTransactionFindFirstArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindFirstOrThrowArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreasuryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TreasuryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreasuryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreasuryTransactions
     * const treasuryTransactions = await prisma.treasuryTransaction.findMany()
     * 
     * // Get first 10 TreasuryTransactions
     * const treasuryTransactions = await prisma.treasuryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreasuryTransactionFindManyArgs>(args?: SelectSubset<T, TreasuryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreasuryTransaction.
     * @param {TreasuryTransactionCreateArgs} args - Arguments to create a TreasuryTransaction.
     * @example
     * // Create one TreasuryTransaction
     * const TreasuryTransaction = await prisma.treasuryTransaction.create({
     *   data: {
     *     // ... data to create a TreasuryTransaction
     *   }
     * })
     * 
     */
    create<T extends TreasuryTransactionCreateArgs>(args: SelectSubset<T, TreasuryTransactionCreateArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreasuryTransactions.
     * @param {TreasuryTransactionCreateManyArgs} args - Arguments to create many TreasuryTransactions.
     * @example
     * // Create many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreasuryTransactionCreateManyArgs>(args?: SelectSubset<T, TreasuryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreasuryTransactions and returns the data saved in the database.
     * @param {TreasuryTransactionCreateManyAndReturnArgs} args - Arguments to create many TreasuryTransactions.
     * @example
     * // Create many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreasuryTransactions and only return the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreasuryTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TreasuryTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreasuryTransaction.
     * @param {TreasuryTransactionDeleteArgs} args - Arguments to delete one TreasuryTransaction.
     * @example
     * // Delete one TreasuryTransaction
     * const TreasuryTransaction = await prisma.treasuryTransaction.delete({
     *   where: {
     *     // ... filter to delete one TreasuryTransaction
     *   }
     * })
     * 
     */
    delete<T extends TreasuryTransactionDeleteArgs>(args: SelectSubset<T, TreasuryTransactionDeleteArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreasuryTransaction.
     * @param {TreasuryTransactionUpdateArgs} args - Arguments to update one TreasuryTransaction.
     * @example
     * // Update one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreasuryTransactionUpdateArgs>(args: SelectSubset<T, TreasuryTransactionUpdateArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreasuryTransactions.
     * @param {TreasuryTransactionDeleteManyArgs} args - Arguments to filter TreasuryTransactions to delete.
     * @example
     * // Delete a few TreasuryTransactions
     * const { count } = await prisma.treasuryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreasuryTransactionDeleteManyArgs>(args?: SelectSubset<T, TreasuryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreasuryTransactionUpdateManyArgs>(args: SelectSubset<T, TreasuryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryTransactions and returns the data updated in the database.
     * @param {TreasuryTransactionUpdateManyAndReturnArgs} args - Arguments to update many TreasuryTransactions.
     * @example
     * // Update many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreasuryTransactions and only return the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreasuryTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreasuryTransaction.
     * @param {TreasuryTransactionUpsertArgs} args - Arguments to update or create a TreasuryTransaction.
     * @example
     * // Update or create a TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.upsert({
     *   create: {
     *     // ... data to create a TreasuryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreasuryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TreasuryTransactionUpsertArgs>(args: SelectSubset<T, TreasuryTransactionUpsertArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreasuryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionCountArgs} args - Arguments to filter TreasuryTransactions to count.
     * @example
     * // Count the number of TreasuryTransactions
     * const count = await prisma.treasuryTransaction.count({
     *   where: {
     *     // ... the filter for the TreasuryTransactions we want to count
     *   }
     * })
    **/
    count<T extends TreasuryTransactionCountArgs>(
      args?: Subset<T, TreasuryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreasuryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreasuryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreasuryTransactionAggregateArgs>(args: Subset<T, TreasuryTransactionAggregateArgs>): Prisma.PrismaPromise<GetTreasuryTransactionAggregateType<T>>

    /**
     * Group by TreasuryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionGroupByArgs} args - Group by arguments.
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
      T extends TreasuryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreasuryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: TreasuryTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreasuryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreasuryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreasuryTransaction model
   */
  readonly fields: TreasuryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreasuryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreasuryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TreasuryTransaction model
   */
  interface TreasuryTransactionFieldRefs {
    readonly id: FieldRef<"TreasuryTransaction", 'String'>
    readonly type: FieldRef<"TreasuryTransaction", 'String'>
    readonly category: FieldRef<"TreasuryTransaction", 'String'>
    readonly amount: FieldRef<"TreasuryTransaction", 'Float'>
    readonly description: FieldRef<"TreasuryTransaction", 'String'>
    readonly reference: FieldRef<"TreasuryTransaction", 'String'>
    readonly paymentMethod: FieldRef<"TreasuryTransaction", 'String'>
    readonly createdBy: FieldRef<"TreasuryTransaction", 'String'>
    readonly createdAt: FieldRef<"TreasuryTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreasuryTransaction findUnique
   */
  export type TreasuryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction findUniqueOrThrow
   */
  export type TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction findFirst
   */
  export type TreasuryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction findFirstOrThrow
   */
  export type TreasuryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction findMany
   */
  export type TreasuryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransactions to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction create
   */
  export type TreasuryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a TreasuryTransaction.
     */
    data: XOR<TreasuryTransactionCreateInput, TreasuryTransactionUncheckedCreateInput>
  }

  /**
   * TreasuryTransaction createMany
   */
  export type TreasuryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreasuryTransactions.
     */
    data: TreasuryTransactionCreateManyInput | TreasuryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryTransaction createManyAndReturn
   */
  export type TreasuryTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many TreasuryTransactions.
     */
    data: TreasuryTransactionCreateManyInput | TreasuryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryTransaction update
   */
  export type TreasuryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a TreasuryTransaction.
     */
    data: XOR<TreasuryTransactionUpdateInput, TreasuryTransactionUncheckedUpdateInput>
    /**
     * Choose, which TreasuryTransaction to update.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction updateMany
   */
  export type TreasuryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreasuryTransactions.
     */
    data: XOR<TreasuryTransactionUpdateManyMutationInput, TreasuryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryTransactions to update
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to update.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction updateManyAndReturn
   */
  export type TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data used to update TreasuryTransactions.
     */
    data: XOR<TreasuryTransactionUpdateManyMutationInput, TreasuryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryTransactions to update
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to update.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction upsert
   */
  export type TreasuryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the TreasuryTransaction to update in case it exists.
     */
    where: TreasuryTransactionWhereUniqueInput
    /**
     * In case the TreasuryTransaction found by the `where` argument doesn't exist, create a new TreasuryTransaction with this data.
     */
    create: XOR<TreasuryTransactionCreateInput, TreasuryTransactionUncheckedCreateInput>
    /**
     * In case the TreasuryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreasuryTransactionUpdateInput, TreasuryTransactionUncheckedUpdateInput>
  }

  /**
   * TreasuryTransaction delete
   */
  export type TreasuryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter which TreasuryTransaction to delete.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction deleteMany
   */
  export type TreasuryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryTransactions to delete
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to delete.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction without action
   */
  export type TreasuryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
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
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
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
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
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
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
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
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    pinCode: 'pinCode',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameAr: 'nameAr',
    slug: 'slug',
    gender: 'gender',
    logoUrl: 'logoUrl',
    coverUrl: 'coverUrl',
    description: 'description',
    phone: 'phone',
    whatsapp: 'whatsapp',
    address: 'address',
    city: 'city',
    openTime: 'openTime',
    closeTime: 'closeTime',
    workDays: 'workDays',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    rating: 'rating',
    reviewCount: 'reviewCount',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalonScalarFieldEnum = (typeof SalonScalarFieldEnum)[keyof typeof SalonScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    name: 'name',
    nameAr: 'nameAr',
    description: 'description',
    gender: 'gender',
    duration: 'duration',
    price: 'price',
    discountPrice: 'discountPrice',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const StaffMemberScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    name: 'name',
    nameAr: 'nameAr',
    title: 'title',
    gender: 'gender',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    specialties: 'specialties',
    isActive: 'isActive',
    rating: 'rating',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffMemberScalarFieldEnum = (typeof StaffMemberScalarFieldEnum)[keyof typeof StaffMemberScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    gender: 'gender',
    notes: 'notes',
    totalVisits: 'totalVisits',
    totalSpent: 'totalSpent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    appointmentNo: 'appointmentNo',
    salonId: 'salonId',
    customerId: 'customerId',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerGender: 'customerGender',
    date: 'date',
    timeSlot: 'timeSlot',
    status: 'status',
    totalPrice: 'totalPrice',
    discount: 'discount',
    finalPrice: 'finalPrice',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    notes: 'notes',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AppointmentItemScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    serviceId: 'serviceId',
    staffId: 'staffId',
    serviceName: 'serviceName',
    staffName: 'staffName',
    price: 'price',
    duration: 'duration'
  };

  export type AppointmentItemScalarFieldEnum = (typeof AppointmentItemScalarFieldEnum)[keyof typeof AppointmentItemScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    url: 'url',
    caption: 'caption',
    gender: 'gender',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    customerName: 'customerName',
    rating: 'rating',
    comment: 'comment',
    gender: 'gender',
    isApproved: 'isApproved',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const OtpTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    purpose: 'purpose',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type OtpTokenScalarFieldEnum = (typeof OtpTokenScalarFieldEnum)[keyof typeof OtpTokenScalarFieldEnum]


  export const TreasuryTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    amount: 'amount',
    description: 'description',
    reference: 'reference',
    paymentMethod: 'paymentMethod',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type TreasuryTransactionScalarFieldEnum = (typeof TreasuryTransactionScalarFieldEnum)[keyof typeof TreasuryTransactionScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pinCode?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pinCode?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    pinCode?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pinCode?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pinCode?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SalonWhereInput = {
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    id?: StringFilter<"Salon"> | string
    name?: StringFilter<"Salon"> | string
    nameAr?: StringNullableFilter<"Salon"> | string | null
    slug?: StringFilter<"Salon"> | string
    gender?: StringFilter<"Salon"> | string
    logoUrl?: StringNullableFilter<"Salon"> | string | null
    coverUrl?: StringNullableFilter<"Salon"> | string | null
    description?: StringNullableFilter<"Salon"> | string | null
    phone?: StringNullableFilter<"Salon"> | string | null
    whatsapp?: StringNullableFilter<"Salon"> | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    city?: StringNullableFilter<"Salon"> | string | null
    openTime?: StringNullableFilter<"Salon"> | string | null
    closeTime?: StringNullableFilter<"Salon"> | string | null
    workDays?: StringNullableFilter<"Salon"> | string | null
    isActive?: BoolFilter<"Salon"> | boolean
    isFeatured?: BoolFilter<"Salon"> | boolean
    rating?: FloatFilter<"Salon"> | number
    reviewCount?: IntFilter<"Salon"> | number
    sortOrder?: IntFilter<"Salon"> | number
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    services?: ServiceListRelationFilter
    staff?: StaffMemberListRelationFilter
    appointments?: AppointmentListRelationFilter
    gallery?: GalleryImageListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type SalonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    slug?: SortOrder
    gender?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    workDays?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    staff?: StaffMemberOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    gallery?: GalleryImageOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type SalonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    name?: StringFilter<"Salon"> | string
    nameAr?: StringNullableFilter<"Salon"> | string | null
    gender?: StringFilter<"Salon"> | string
    logoUrl?: StringNullableFilter<"Salon"> | string | null
    coverUrl?: StringNullableFilter<"Salon"> | string | null
    description?: StringNullableFilter<"Salon"> | string | null
    phone?: StringNullableFilter<"Salon"> | string | null
    whatsapp?: StringNullableFilter<"Salon"> | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    city?: StringNullableFilter<"Salon"> | string | null
    openTime?: StringNullableFilter<"Salon"> | string | null
    closeTime?: StringNullableFilter<"Salon"> | string | null
    workDays?: StringNullableFilter<"Salon"> | string | null
    isActive?: BoolFilter<"Salon"> | boolean
    isFeatured?: BoolFilter<"Salon"> | boolean
    rating?: FloatFilter<"Salon"> | number
    reviewCount?: IntFilter<"Salon"> | number
    sortOrder?: IntFilter<"Salon"> | number
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    services?: ServiceListRelationFilter
    staff?: StaffMemberListRelationFilter
    appointments?: AppointmentListRelationFilter
    gallery?: GalleryImageListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "slug">

  export type SalonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    slug?: SortOrder
    gender?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    workDays?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalonCountOrderByAggregateInput
    _avg?: SalonAvgOrderByAggregateInput
    _max?: SalonMaxOrderByAggregateInput
    _min?: SalonMinOrderByAggregateInput
    _sum?: SalonSumOrderByAggregateInput
  }

  export type SalonScalarWhereWithAggregatesInput = {
    AND?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    OR?: SalonScalarWhereWithAggregatesInput[]
    NOT?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Salon"> | string
    name?: StringWithAggregatesFilter<"Salon"> | string
    nameAr?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    slug?: StringWithAggregatesFilter<"Salon"> | string
    gender?: StringWithAggregatesFilter<"Salon"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    description?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    address?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    city?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    openTime?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    closeTime?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    workDays?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    isActive?: BoolWithAggregatesFilter<"Salon"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Salon"> | boolean
    rating?: FloatWithAggregatesFilter<"Salon"> | number
    reviewCount?: IntWithAggregatesFilter<"Salon"> | number
    sortOrder?: IntWithAggregatesFilter<"Salon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    salonId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    nameAr?: StringNullableFilter<"Service"> | string | null
    description?: StringNullableFilter<"Service"> | string | null
    gender?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    discountPrice?: FloatNullableFilter<"Service"> | number | null
    imageUrl?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    isFeatured?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    appointmentItems?: AppointmentItemListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    appointmentItems?: AppointmentItemOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    salonId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    nameAr?: StringNullableFilter<"Service"> | string | null
    description?: StringNullableFilter<"Service"> | string | null
    gender?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    discountPrice?: FloatNullableFilter<"Service"> | number | null
    imageUrl?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    isFeatured?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    appointmentItems?: AppointmentItemListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    salonId?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    nameAr?: StringNullableWithAggregatesFilter<"Service"> | string | null
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    gender?: StringWithAggregatesFilter<"Service"> | string
    duration?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatWithAggregatesFilter<"Service"> | number
    discountPrice?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"Service"> | string | null
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Service"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type StaffMemberWhereInput = {
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    id?: StringFilter<"StaffMember"> | string
    salonId?: StringFilter<"StaffMember"> | string
    name?: StringFilter<"StaffMember"> | string
    nameAr?: StringNullableFilter<"StaffMember"> | string | null
    title?: StringNullableFilter<"StaffMember"> | string | null
    gender?: StringFilter<"StaffMember"> | string
    phone?: StringNullableFilter<"StaffMember"> | string | null
    avatarUrl?: StringNullableFilter<"StaffMember"> | string | null
    bio?: StringNullableFilter<"StaffMember"> | string | null
    specialties?: StringNullableFilter<"StaffMember"> | string | null
    isActive?: BoolFilter<"StaffMember"> | boolean
    rating?: FloatFilter<"StaffMember"> | number
    sortOrder?: IntFilter<"StaffMember"> | number
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeFilter<"StaffMember"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    appointments?: AppointmentItemListRelationFilter
  }

  export type StaffMemberOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    gender?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    specialties?: SortOrderInput | SortOrder
    isActive?: SortOrder
    rating?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    appointments?: AppointmentItemOrderByRelationAggregateInput
  }

  export type StaffMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    salonId?: StringFilter<"StaffMember"> | string
    name?: StringFilter<"StaffMember"> | string
    nameAr?: StringNullableFilter<"StaffMember"> | string | null
    title?: StringNullableFilter<"StaffMember"> | string | null
    gender?: StringFilter<"StaffMember"> | string
    phone?: StringNullableFilter<"StaffMember"> | string | null
    avatarUrl?: StringNullableFilter<"StaffMember"> | string | null
    bio?: StringNullableFilter<"StaffMember"> | string | null
    specialties?: StringNullableFilter<"StaffMember"> | string | null
    isActive?: BoolFilter<"StaffMember"> | boolean
    rating?: FloatFilter<"StaffMember"> | number
    sortOrder?: IntFilter<"StaffMember"> | number
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeFilter<"StaffMember"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    appointments?: AppointmentItemListRelationFilter
  }, "id">

  export type StaffMemberOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    gender?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    specialties?: SortOrderInput | SortOrder
    isActive?: SortOrder
    rating?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffMemberCountOrderByAggregateInput
    _avg?: StaffMemberAvgOrderByAggregateInput
    _max?: StaffMemberMaxOrderByAggregateInput
    _min?: StaffMemberMinOrderByAggregateInput
    _sum?: StaffMemberSumOrderByAggregateInput
  }

  export type StaffMemberScalarWhereWithAggregatesInput = {
    AND?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    OR?: StaffMemberScalarWhereWithAggregatesInput[]
    NOT?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffMember"> | string
    salonId?: StringWithAggregatesFilter<"StaffMember"> | string
    name?: StringWithAggregatesFilter<"StaffMember"> | string
    nameAr?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    title?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    gender?: StringWithAggregatesFilter<"StaffMember"> | string
    phone?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    bio?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    specialties?: StringNullableWithAggregatesFilter<"StaffMember"> | string | null
    isActive?: BoolWithAggregatesFilter<"StaffMember"> | boolean
    rating?: FloatWithAggregatesFilter<"StaffMember"> | number
    sortOrder?: IntWithAggregatesFilter<"StaffMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffMember"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    gender?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    totalVisits?: IntFilter<"Customer"> | number
    totalSpent?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    appointments?: AppointmentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    gender?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    totalVisits?: IntFilter<"Customer"> | number
    totalSpent?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    appointments?: AppointmentListRelationFilter
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    totalVisits?: IntWithAggregatesFilter<"Customer"> | number
    totalSpent?: FloatWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    appointmentNo?: StringFilter<"Appointment"> | string
    salonId?: StringFilter<"Appointment"> | string
    customerId?: StringNullableFilter<"Appointment"> | string | null
    customerName?: StringFilter<"Appointment"> | string
    customerPhone?: StringFilter<"Appointment"> | string
    customerGender?: StringNullableFilter<"Appointment"> | string | null
    date?: StringFilter<"Appointment"> | string
    timeSlot?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    totalPrice?: FloatFilter<"Appointment"> | number
    discount?: FloatFilter<"Appointment"> | number
    finalPrice?: FloatFilter<"Appointment"> | number
    paymentStatus?: StringFilter<"Appointment"> | string
    paymentMethod?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    source?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: AppointmentItemListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentNo?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerGender?: SortOrderInput | SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    items?: AppointmentItemOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentNo?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    salonId?: StringFilter<"Appointment"> | string
    customerId?: StringNullableFilter<"Appointment"> | string | null
    customerName?: StringFilter<"Appointment"> | string
    customerPhone?: StringFilter<"Appointment"> | string
    customerGender?: StringNullableFilter<"Appointment"> | string | null
    date?: StringFilter<"Appointment"> | string
    timeSlot?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    totalPrice?: FloatFilter<"Appointment"> | number
    discount?: FloatFilter<"Appointment"> | number
    finalPrice?: FloatFilter<"Appointment"> | number
    paymentStatus?: StringFilter<"Appointment"> | string
    paymentMethod?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    source?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: AppointmentItemListRelationFilter
  }, "id" | "appointmentNo">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentNo?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerGender?: SortOrderInput | SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    appointmentNo?: StringWithAggregatesFilter<"Appointment"> | string
    salonId?: StringWithAggregatesFilter<"Appointment"> | string
    customerId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    customerName?: StringWithAggregatesFilter<"Appointment"> | string
    customerPhone?: StringWithAggregatesFilter<"Appointment"> | string
    customerGender?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    date?: StringWithAggregatesFilter<"Appointment"> | string
    timeSlot?: StringWithAggregatesFilter<"Appointment"> | string
    status?: StringWithAggregatesFilter<"Appointment"> | string
    totalPrice?: FloatWithAggregatesFilter<"Appointment"> | number
    discount?: FloatWithAggregatesFilter<"Appointment"> | number
    finalPrice?: FloatWithAggregatesFilter<"Appointment"> | number
    paymentStatus?: StringWithAggregatesFilter<"Appointment"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    source?: StringWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type AppointmentItemWhereInput = {
    AND?: AppointmentItemWhereInput | AppointmentItemWhereInput[]
    OR?: AppointmentItemWhereInput[]
    NOT?: AppointmentItemWhereInput | AppointmentItemWhereInput[]
    id?: StringFilter<"AppointmentItem"> | string
    appointmentId?: StringFilter<"AppointmentItem"> | string
    serviceId?: StringNullableFilter<"AppointmentItem"> | string | null
    staffId?: StringNullableFilter<"AppointmentItem"> | string | null
    serviceName?: StringFilter<"AppointmentItem"> | string
    staffName?: StringNullableFilter<"AppointmentItem"> | string | null
    price?: FloatFilter<"AppointmentItem"> | number
    duration?: IntFilter<"AppointmentItem"> | number
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    staff?: XOR<StaffMemberNullableScalarRelationFilter, StaffMemberWhereInput> | null
  }

  export type AppointmentItemOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceName?: SortOrder
    staffName?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    staff?: StaffMemberOrderByWithRelationInput
  }

  export type AppointmentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentItemWhereInput | AppointmentItemWhereInput[]
    OR?: AppointmentItemWhereInput[]
    NOT?: AppointmentItemWhereInput | AppointmentItemWhereInput[]
    appointmentId?: StringFilter<"AppointmentItem"> | string
    serviceId?: StringNullableFilter<"AppointmentItem"> | string | null
    staffId?: StringNullableFilter<"AppointmentItem"> | string | null
    serviceName?: StringFilter<"AppointmentItem"> | string
    staffName?: StringNullableFilter<"AppointmentItem"> | string | null
    price?: FloatFilter<"AppointmentItem"> | number
    duration?: IntFilter<"AppointmentItem"> | number
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    staff?: XOR<StaffMemberNullableScalarRelationFilter, StaffMemberWhereInput> | null
  }, "id">

  export type AppointmentItemOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceName?: SortOrder
    staffName?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    _count?: AppointmentItemCountOrderByAggregateInput
    _avg?: AppointmentItemAvgOrderByAggregateInput
    _max?: AppointmentItemMaxOrderByAggregateInput
    _min?: AppointmentItemMinOrderByAggregateInput
    _sum?: AppointmentItemSumOrderByAggregateInput
  }

  export type AppointmentItemScalarWhereWithAggregatesInput = {
    AND?: AppointmentItemScalarWhereWithAggregatesInput | AppointmentItemScalarWhereWithAggregatesInput[]
    OR?: AppointmentItemScalarWhereWithAggregatesInput[]
    NOT?: AppointmentItemScalarWhereWithAggregatesInput | AppointmentItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentItem"> | string
    appointmentId?: StringWithAggregatesFilter<"AppointmentItem"> | string
    serviceId?: StringNullableWithAggregatesFilter<"AppointmentItem"> | string | null
    staffId?: StringNullableWithAggregatesFilter<"AppointmentItem"> | string | null
    serviceName?: StringWithAggregatesFilter<"AppointmentItem"> | string
    staffName?: StringNullableWithAggregatesFilter<"AppointmentItem"> | string | null
    price?: FloatWithAggregatesFilter<"AppointmentItem"> | number
    duration?: IntWithAggregatesFilter<"AppointmentItem"> | number
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    salonId?: StringFilter<"GalleryImage"> | string
    url?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    gender?: StringFilter<"GalleryImage"> | string
    sortOrder?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    gender?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    salonId?: StringFilter<"GalleryImage"> | string
    url?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    gender?: StringFilter<"GalleryImage"> | string
    sortOrder?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    gender?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _avg?: GalleryImageAvgOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
    _sum?: GalleryImageSumOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryImage"> | string
    salonId?: StringWithAggregatesFilter<"GalleryImage"> | string
    url?: StringWithAggregatesFilter<"GalleryImage"> | string
    caption?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    gender?: StringWithAggregatesFilter<"GalleryImage"> | string
    sortOrder?: IntWithAggregatesFilter<"GalleryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    salonId?: StringFilter<"Review"> | string
    customerName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    gender?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    gender?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    salonId?: StringFilter<"Review"> | string
    customerName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    gender?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    gender?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    salonId?: StringWithAggregatesFilter<"Review"> | string
    customerName?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    gender?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isApproved?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type OtpTokenWhereInput = {
    AND?: OtpTokenWhereInput | OtpTokenWhereInput[]
    OR?: OtpTokenWhereInput[]
    NOT?: OtpTokenWhereInput | OtpTokenWhereInput[]
    id?: StringFilter<"OtpToken"> | string
    email?: StringFilter<"OtpToken"> | string
    otp?: StringFilter<"OtpToken"> | string
    purpose?: StringFilter<"OtpToken"> | string
    expiresAt?: DateTimeFilter<"OtpToken"> | Date | string
    used?: BoolFilter<"OtpToken"> | boolean
    createdAt?: DateTimeFilter<"OtpToken"> | Date | string
  }

  export type OtpTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpTokenWhereInput | OtpTokenWhereInput[]
    OR?: OtpTokenWhereInput[]
    NOT?: OtpTokenWhereInput | OtpTokenWhereInput[]
    email?: StringFilter<"OtpToken"> | string
    otp?: StringFilter<"OtpToken"> | string
    purpose?: StringFilter<"OtpToken"> | string
    expiresAt?: DateTimeFilter<"OtpToken"> | Date | string
    used?: BoolFilter<"OtpToken"> | boolean
    createdAt?: DateTimeFilter<"OtpToken"> | Date | string
  }, "id">

  export type OtpTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: OtpTokenCountOrderByAggregateInput
    _max?: OtpTokenMaxOrderByAggregateInput
    _min?: OtpTokenMinOrderByAggregateInput
  }

  export type OtpTokenScalarWhereWithAggregatesInput = {
    AND?: OtpTokenScalarWhereWithAggregatesInput | OtpTokenScalarWhereWithAggregatesInput[]
    OR?: OtpTokenScalarWhereWithAggregatesInput[]
    NOT?: OtpTokenScalarWhereWithAggregatesInput | OtpTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpToken"> | string
    email?: StringWithAggregatesFilter<"OtpToken"> | string
    otp?: StringWithAggregatesFilter<"OtpToken"> | string
    purpose?: StringWithAggregatesFilter<"OtpToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpToken"> | Date | string
    used?: BoolWithAggregatesFilter<"OtpToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpToken"> | Date | string
  }

  export type TreasuryTransactionWhereInput = {
    AND?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    OR?: TreasuryTransactionWhereInput[]
    NOT?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    id?: StringFilter<"TreasuryTransaction"> | string
    type?: StringFilter<"TreasuryTransaction"> | string
    category?: StringFilter<"TreasuryTransaction"> | string
    amount?: FloatFilter<"TreasuryTransaction"> | number
    description?: StringFilter<"TreasuryTransaction"> | string
    reference?: StringNullableFilter<"TreasuryTransaction"> | string | null
    paymentMethod?: StringFilter<"TreasuryTransaction"> | string
    createdBy?: StringFilter<"TreasuryTransaction"> | string
    createdAt?: DateTimeFilter<"TreasuryTransaction"> | Date | string
  }

  export type TreasuryTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    OR?: TreasuryTransactionWhereInput[]
    NOT?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    type?: StringFilter<"TreasuryTransaction"> | string
    category?: StringFilter<"TreasuryTransaction"> | string
    amount?: FloatFilter<"TreasuryTransaction"> | number
    description?: StringFilter<"TreasuryTransaction"> | string
    reference?: StringNullableFilter<"TreasuryTransaction"> | string | null
    paymentMethod?: StringFilter<"TreasuryTransaction"> | string
    createdBy?: StringFilter<"TreasuryTransaction"> | string
    createdAt?: DateTimeFilter<"TreasuryTransaction"> | Date | string
  }, "id">

  export type TreasuryTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: TreasuryTransactionCountOrderByAggregateInput
    _avg?: TreasuryTransactionAvgOrderByAggregateInput
    _max?: TreasuryTransactionMaxOrderByAggregateInput
    _min?: TreasuryTransactionMinOrderByAggregateInput
    _sum?: TreasuryTransactionSumOrderByAggregateInput
  }

  export type TreasuryTransactionScalarWhereWithAggregatesInput = {
    AND?: TreasuryTransactionScalarWhereWithAggregatesInput | TreasuryTransactionScalarWhereWithAggregatesInput[]
    OR?: TreasuryTransactionScalarWhereWithAggregatesInput[]
    NOT?: TreasuryTransactionScalarWhereWithAggregatesInput | TreasuryTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    type?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    category?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    amount?: FloatWithAggregatesFilter<"TreasuryTransaction"> | number
    description?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    reference?: StringNullableWithAggregatesFilter<"TreasuryTransaction"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    createdBy?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TreasuryTransaction"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
  }, "id" | "key">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    pinCode: string
    name: string
    role?: string
    isActive?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    pinCode: string
    name: string
    role?: string
    isActive?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    pinCode: string
    name: string
    role?: string
    isActive?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutSalonInput
    staff?: StaffMemberCreateNestedManyWithoutSalonInput
    appointments?: AppointmentCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageCreateNestedManyWithoutSalonInput
    reviews?: ReviewCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    staff?: StaffMemberUncheckedCreateNestedManyWithoutSalonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageUncheckedCreateNestedManyWithoutSalonInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUncheckedUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUncheckedUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateManyInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutServicesInput
    appointmentItems?: AppointmentItemCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentItems?: AppointmentItemUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
    appointmentItems?: AppointmentItemUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentItems?: AppointmentItemUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberCreateInput = {
    id?: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutStaffInput
    appointments?: AppointmentItemCreateNestedManyWithoutStaffInput
  }

  export type StaffMemberUncheckedCreateInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentItemUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutStaffNestedInput
    appointments?: AppointmentItemUpdateManyWithoutStaffNestedInput
  }

  export type StaffMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentItemUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffMemberCreateManyInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    gender?: string | null
    notes?: string | null
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    gender?: string | null
    notes?: string | null
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    gender?: string | null
    notes?: string | null
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    appointmentNo: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutAppointmentsInput
    customer?: CustomerCreateNestedOneWithoutAppointmentsInput
    items?: AppointmentItemCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    appointmentNo: string
    salonId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: AppointmentItemUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutAppointmentsNestedInput
    customer?: CustomerUpdateOneWithoutAppointmentsNestedInput
    items?: AppointmentItemUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: AppointmentItemUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    appointmentNo: string
    salonId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentItemCreateInput = {
    id?: string
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
    appointment: AppointmentCreateNestedOneWithoutItemsInput
    service?: ServiceCreateNestedOneWithoutAppointmentItemsInput
    staff?: StaffMemberCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentItemUncheckedCreateInput = {
    id?: string
    appointmentId: string
    serviceId?: string | null
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    appointment?: AppointmentUpdateOneRequiredWithoutItemsNestedInput
    service?: ServiceUpdateOneWithoutAppointmentItemsNestedInput
    staff?: StaffMemberUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemCreateManyInput = {
    id?: string
    appointmentId: string
    serviceId?: string | null
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type GalleryImageCreateInput = {
    id?: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
    salon: SalonCreateNestedOneWithoutGalleryInput
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: string
    salonId: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: string
    salonId: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
    salon: SalonCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    salonId: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    salonId: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpTokenCreateInput = {
    id?: string
    email: string
    otp: string
    purpose?: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpTokenUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    purpose?: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpTokenCreateManyInput = {
    id?: string
    email: string
    otp: string
    purpose?: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    description: string
    reference?: string | null
    paymentMethod?: string
    createdBy?: string
    createdAt?: Date | string
  }

  export type TreasuryTransactionUncheckedCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    description: string
    reference?: string | null
    paymentMethod?: string
    createdBy?: string
    createdAt?: Date | string
  }

  export type TreasuryTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionCreateManyInput = {
    id?: string
    type: string
    category: string
    amount: number
    description: string
    reference?: string | null
    paymentMethod?: string
    createdBy?: string
    createdAt?: Date | string
  }

  export type TreasuryTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    id?: string
    key: string
    value: string
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateManyInput = {
    id?: string
    key: string
    value: string
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pinCode?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pinCode?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pinCode?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type StaffMemberListRelationFilter = {
    every?: StaffMemberWhereInput
    some?: StaffMemberWhereInput
    none?: StaffMemberWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type GalleryImageListRelationFilter = {
    every?: GalleryImageWhereInput
    some?: GalleryImageWhereInput
    none?: GalleryImageWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    city?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    workDays?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type SalonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    city?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    workDays?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    slug?: SortOrder
    gender?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    city?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    workDays?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonSumOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SalonScalarRelationFilter = {
    is?: SalonWhereInput
    isNot?: SalonWhereInput
  }

  export type AppointmentItemListRelationFilter = {
    every?: AppointmentItemWhereInput
    some?: AppointmentItemWhereInput
    none?: AppointmentItemWhereInput
  }

  export type AppointmentItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StaffMemberCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    specialties?: SortOrder
    isActive?: SortOrder
    rating?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberAvgOrderByAggregateInput = {
    rating?: SortOrder
    sortOrder?: SortOrder
  }

  export type StaffMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    specialties?: SortOrder
    isActive?: SortOrder
    rating?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    specialties?: SortOrder
    isActive?: SortOrder
    rating?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMemberSumOrderByAggregateInput = {
    rating?: SortOrder
    sortOrder?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    notes?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalVisits?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    notes?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    notes?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalVisits?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentNo?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerGender?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentNo?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerGender?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentNo?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerGender?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type StaffMemberNullableScalarRelationFilter = {
    is?: StaffMemberWhereInput | null
    isNot?: StaffMemberWhereInput | null
  }

  export type AppointmentItemCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    serviceId?: SortOrder
    staffId?: SortOrder
    serviceName?: SortOrder
    staffName?: SortOrder
    price?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentItemAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentItemMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    serviceId?: SortOrder
    staffId?: SortOrder
    serviceName?: SortOrder
    staffName?: SortOrder
    price?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentItemMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    serviceId?: SortOrder
    staffId?: SortOrder
    serviceName?: SortOrder
    staffName?: SortOrder
    price?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentItemSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    gender?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    gender?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    gender?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    gender?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    gender?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    gender?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type OtpTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    purpose?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    paymentMethod?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TreasuryTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    paymentMethod?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    paymentMethod?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceCreateNestedManyWithoutSalonInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StaffMemberCreateNestedManyWithoutSalonInput = {
    create?: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput> | StaffMemberCreateWithoutSalonInput[] | StaffMemberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: StaffMemberCreateOrConnectWithoutSalonInput | StaffMemberCreateOrConnectWithoutSalonInput[]
    createMany?: StaffMemberCreateManySalonInputEnvelope
    connect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutSalonInput = {
    create?: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput> | AppointmentCreateWithoutSalonInput[] | AppointmentUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSalonInput | AppointmentCreateOrConnectWithoutSalonInput[]
    createMany?: AppointmentCreateManySalonInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type GalleryImageCreateNestedManyWithoutSalonInput = {
    create?: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput> | GalleryImageCreateWithoutSalonInput[] | GalleryImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutSalonInput | GalleryImageCreateOrConnectWithoutSalonInput[]
    createMany?: GalleryImageCreateManySalonInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutSalonInput = {
    create?: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput> | ReviewCreateWithoutSalonInput[] | ReviewUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSalonInput | ReviewCreateOrConnectWithoutSalonInput[]
    createMany?: ReviewCreateManySalonInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StaffMemberUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput> | StaffMemberCreateWithoutSalonInput[] | StaffMemberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: StaffMemberCreateOrConnectWithoutSalonInput | StaffMemberCreateOrConnectWithoutSalonInput[]
    createMany?: StaffMemberCreateManySalonInputEnvelope
    connect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput> | AppointmentCreateWithoutSalonInput[] | AppointmentUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSalonInput | AppointmentCreateOrConnectWithoutSalonInput[]
    createMany?: AppointmentCreateManySalonInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type GalleryImageUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput> | GalleryImageCreateWithoutSalonInput[] | GalleryImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutSalonInput | GalleryImageCreateOrConnectWithoutSalonInput[]
    createMany?: GalleryImageCreateManySalonInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput> | ReviewCreateWithoutSalonInput[] | ReviewUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSalonInput | ReviewCreateOrConnectWithoutSalonInput[]
    createMany?: ReviewCreateManySalonInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSalonInput | ServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSalonInput | ServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSalonInput | ServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type StaffMemberUpdateManyWithoutSalonNestedInput = {
    create?: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput> | StaffMemberCreateWithoutSalonInput[] | StaffMemberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: StaffMemberCreateOrConnectWithoutSalonInput | StaffMemberCreateOrConnectWithoutSalonInput[]
    upsert?: StaffMemberUpsertWithWhereUniqueWithoutSalonInput | StaffMemberUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: StaffMemberCreateManySalonInputEnvelope
    set?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    disconnect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    delete?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    connect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    update?: StaffMemberUpdateWithWhereUniqueWithoutSalonInput | StaffMemberUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: StaffMemberUpdateManyWithWhereWithoutSalonInput | StaffMemberUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: StaffMemberScalarWhereInput | StaffMemberScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutSalonNestedInput = {
    create?: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput> | AppointmentCreateWithoutSalonInput[] | AppointmentUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSalonInput | AppointmentCreateOrConnectWithoutSalonInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSalonInput | AppointmentUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: AppointmentCreateManySalonInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSalonInput | AppointmentUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSalonInput | AppointmentUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type GalleryImageUpdateManyWithoutSalonNestedInput = {
    create?: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput> | GalleryImageCreateWithoutSalonInput[] | GalleryImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutSalonInput | GalleryImageCreateOrConnectWithoutSalonInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutSalonInput | GalleryImageUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: GalleryImageCreateManySalonInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutSalonInput | GalleryImageUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutSalonInput | GalleryImageUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput> | ReviewCreateWithoutSalonInput[] | ReviewUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSalonInput | ReviewCreateOrConnectWithoutSalonInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSalonInput | ReviewUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ReviewCreateManySalonInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSalonInput | ReviewUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSalonInput | ReviewUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSalonInput | ServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSalonInput | ServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSalonInput | ServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type StaffMemberUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput> | StaffMemberCreateWithoutSalonInput[] | StaffMemberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: StaffMemberCreateOrConnectWithoutSalonInput | StaffMemberCreateOrConnectWithoutSalonInput[]
    upsert?: StaffMemberUpsertWithWhereUniqueWithoutSalonInput | StaffMemberUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: StaffMemberCreateManySalonInputEnvelope
    set?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    disconnect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    delete?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    connect?: StaffMemberWhereUniqueInput | StaffMemberWhereUniqueInput[]
    update?: StaffMemberUpdateWithWhereUniqueWithoutSalonInput | StaffMemberUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: StaffMemberUpdateManyWithWhereWithoutSalonInput | StaffMemberUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: StaffMemberScalarWhereInput | StaffMemberScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput> | AppointmentCreateWithoutSalonInput[] | AppointmentUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSalonInput | AppointmentCreateOrConnectWithoutSalonInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSalonInput | AppointmentUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: AppointmentCreateManySalonInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSalonInput | AppointmentUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSalonInput | AppointmentUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type GalleryImageUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput> | GalleryImageCreateWithoutSalonInput[] | GalleryImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutSalonInput | GalleryImageCreateOrConnectWithoutSalonInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutSalonInput | GalleryImageUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: GalleryImageCreateManySalonInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutSalonInput | GalleryImageUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutSalonInput | GalleryImageUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput> | ReviewCreateWithoutSalonInput[] | ReviewUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSalonInput | ReviewCreateOrConnectWithoutSalonInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSalonInput | ReviewUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ReviewCreateManySalonInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSalonInput | ReviewUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSalonInput | ReviewUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutServicesInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    connect?: SalonWhereUniqueInput
  }

  export type AppointmentItemCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput> | AppointmentItemCreateWithoutServiceInput[] | AppointmentItemUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutServiceInput | AppointmentItemCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentItemCreateManyServiceInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type AppointmentItemUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput> | AppointmentItemCreateWithoutServiceInput[] | AppointmentItemUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutServiceInput | AppointmentItemCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentItemCreateManyServiceInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalonUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    upsert?: SalonUpsertWithoutServicesInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutServicesInput, SalonUpdateWithoutServicesInput>, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentItemUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput> | AppointmentItemCreateWithoutServiceInput[] | AppointmentItemUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutServiceInput | AppointmentItemCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutServiceInput | AppointmentItemUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentItemCreateManyServiceInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutServiceInput | AppointmentItemUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutServiceInput | AppointmentItemUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type AppointmentItemUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput> | AppointmentItemCreateWithoutServiceInput[] | AppointmentItemUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutServiceInput | AppointmentItemCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutServiceInput | AppointmentItemUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentItemCreateManyServiceInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutServiceInput | AppointmentItemUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutServiceInput | AppointmentItemUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutStaffInput = {
    create?: XOR<SalonCreateWithoutStaffInput, SalonUncheckedCreateWithoutStaffInput>
    connectOrCreate?: SalonCreateOrConnectWithoutStaffInput
    connect?: SalonWhereUniqueInput
  }

  export type AppointmentItemCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput> | AppointmentItemCreateWithoutStaffInput[] | AppointmentItemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutStaffInput | AppointmentItemCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentItemCreateManyStaffInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type AppointmentItemUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput> | AppointmentItemCreateWithoutStaffInput[] | AppointmentItemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutStaffInput | AppointmentItemCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentItemCreateManyStaffInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type SalonUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<SalonCreateWithoutStaffInput, SalonUncheckedCreateWithoutStaffInput>
    connectOrCreate?: SalonCreateOrConnectWithoutStaffInput
    upsert?: SalonUpsertWithoutStaffInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutStaffInput, SalonUpdateWithoutStaffInput>, SalonUncheckedUpdateWithoutStaffInput>
  }

  export type AppointmentItemUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput> | AppointmentItemCreateWithoutStaffInput[] | AppointmentItemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutStaffInput | AppointmentItemCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutStaffInput | AppointmentItemUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentItemCreateManyStaffInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutStaffInput | AppointmentItemUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutStaffInput | AppointmentItemUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type AppointmentItemUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput> | AppointmentItemCreateWithoutStaffInput[] | AppointmentItemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutStaffInput | AppointmentItemCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutStaffInput | AppointmentItemUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentItemCreateManyStaffInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutStaffInput | AppointmentItemUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutStaffInput | AppointmentItemUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<SalonCreateWithoutAppointmentsInput, SalonUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutAppointmentsInput
    connect?: SalonWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type AppointmentItemCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput> | AppointmentItemCreateWithoutAppointmentInput[] | AppointmentItemUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutAppointmentInput | AppointmentItemCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentItemCreateManyAppointmentInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type AppointmentItemUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput> | AppointmentItemCreateWithoutAppointmentInput[] | AppointmentItemUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutAppointmentInput | AppointmentItemCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentItemCreateManyAppointmentInputEnvelope
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
  }

  export type SalonUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<SalonCreateWithoutAppointmentsInput, SalonUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutAppointmentsInput
    upsert?: SalonUpsertWithoutAppointmentsInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutAppointmentsInput, SalonUpdateWithoutAppointmentsInput>, SalonUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CustomerUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    upsert?: CustomerUpsertWithoutAppointmentsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAppointmentsInput, CustomerUpdateWithoutAppointmentsInput>, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AppointmentItemUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput> | AppointmentItemCreateWithoutAppointmentInput[] | AppointmentItemUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutAppointmentInput | AppointmentItemCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentItemUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentItemCreateManyAppointmentInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentItemUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutAppointmentInput | AppointmentItemUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type AppointmentItemUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput> | AppointmentItemCreateWithoutAppointmentInput[] | AppointmentItemUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentItemCreateOrConnectWithoutAppointmentInput | AppointmentItemCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentItemUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentItemUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentItemCreateManyAppointmentInputEnvelope
    set?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    disconnect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    delete?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    connect?: AppointmentItemWhereUniqueInput | AppointmentItemWhereUniqueInput[]
    update?: AppointmentItemUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentItemUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentItemUpdateManyWithWhereWithoutAppointmentInput | AppointmentItemUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutItemsInput = {
    create?: XOR<AppointmentCreateWithoutItemsInput, AppointmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutItemsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentItemsInput = {
    create?: XOR<ServiceCreateWithoutAppointmentItemsInput, ServiceUncheckedCreateWithoutAppointmentItemsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentItemsInput
    connect?: ServiceWhereUniqueInput
  }

  export type StaffMemberCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<StaffMemberCreateWithoutAppointmentsInput, StaffMemberUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: StaffMemberCreateOrConnectWithoutAppointmentsInput
    connect?: StaffMemberWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<AppointmentCreateWithoutItemsInput, AppointmentUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutItemsInput
    upsert?: AppointmentUpsertWithoutItemsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutItemsInput, AppointmentUpdateWithoutItemsInput>, AppointmentUncheckedUpdateWithoutItemsInput>
  }

  export type ServiceUpdateOneWithoutAppointmentItemsNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentItemsInput, ServiceUncheckedCreateWithoutAppointmentItemsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentItemsInput
    upsert?: ServiceUpsertWithoutAppointmentItemsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentItemsInput, ServiceUpdateWithoutAppointmentItemsInput>, ServiceUncheckedUpdateWithoutAppointmentItemsInput>
  }

  export type StaffMemberUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<StaffMemberCreateWithoutAppointmentsInput, StaffMemberUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: StaffMemberCreateOrConnectWithoutAppointmentsInput
    upsert?: StaffMemberUpsertWithoutAppointmentsInput
    disconnect?: StaffMemberWhereInput | boolean
    delete?: StaffMemberWhereInput | boolean
    connect?: StaffMemberWhereUniqueInput
    update?: XOR<XOR<StaffMemberUpdateToOneWithWhereWithoutAppointmentsInput, StaffMemberUpdateWithoutAppointmentsInput>, StaffMemberUncheckedUpdateWithoutAppointmentsInput>
  }

  export type SalonCreateNestedOneWithoutGalleryInput = {
    create?: XOR<SalonCreateWithoutGalleryInput, SalonUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: SalonCreateOrConnectWithoutGalleryInput
    connect?: SalonWhereUniqueInput
  }

  export type SalonUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<SalonCreateWithoutGalleryInput, SalonUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: SalonCreateOrConnectWithoutGalleryInput
    upsert?: SalonUpsertWithoutGalleryInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutGalleryInput, SalonUpdateWithoutGalleryInput>, SalonUncheckedUpdateWithoutGalleryInput>
  }

  export type SalonCreateNestedOneWithoutReviewsInput = {
    create?: XOR<SalonCreateWithoutReviewsInput, SalonUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutReviewsInput
    connect?: SalonWhereUniqueInput
  }

  export type SalonUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<SalonCreateWithoutReviewsInput, SalonUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutReviewsInput
    upsert?: SalonUpsertWithoutReviewsInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutReviewsInput, SalonUpdateWithoutReviewsInput>, SalonUncheckedUpdateWithoutReviewsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutSalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentItems?: AppointmentItemCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutSalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentItems?: AppointmentItemUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput>
  }

  export type ServiceCreateManySalonInputEnvelope = {
    data: ServiceCreateManySalonInput | ServiceCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type StaffMemberCreateWithoutSalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentItemCreateNestedManyWithoutStaffInput
  }

  export type StaffMemberUncheckedCreateWithoutSalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentItemUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffMemberCreateOrConnectWithoutSalonInput = {
    where: StaffMemberWhereUniqueInput
    create: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput>
  }

  export type StaffMemberCreateManySalonInputEnvelope = {
    data: StaffMemberCreateManySalonInput | StaffMemberCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutSalonInput = {
    id?: string
    appointmentNo: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutAppointmentsInput
    items?: AppointmentItemCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutSalonInput = {
    id?: string
    appointmentNo: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: AppointmentItemUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutSalonInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput>
  }

  export type AppointmentCreateManySalonInputEnvelope = {
    data: AppointmentCreateManySalonInput | AppointmentCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type GalleryImageCreateWithoutSalonInput = {
    id?: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryImageUncheckedCreateWithoutSalonInput = {
    id?: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryImageCreateOrConnectWithoutSalonInput = {
    where: GalleryImageWhereUniqueInput
    create: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput>
  }

  export type GalleryImageCreateManySalonInputEnvelope = {
    data: GalleryImageCreateManySalonInput | GalleryImageCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutSalonInput = {
    id?: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutSalonInput = {
    id?: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutSalonInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput>
  }

  export type ReviewCreateManySalonInputEnvelope = {
    data: ReviewCreateManySalonInput | ReviewCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutSalonInput, ServiceUncheckedUpdateWithoutSalonInput>
    create: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutSalonInput, ServiceUncheckedUpdateWithoutSalonInput>
  }

  export type ServiceUpdateManyWithWhereWithoutSalonInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutSalonInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    salonId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    nameAr?: StringNullableFilter<"Service"> | string | null
    description?: StringNullableFilter<"Service"> | string | null
    gender?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    discountPrice?: FloatNullableFilter<"Service"> | number | null
    imageUrl?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    isFeatured?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type StaffMemberUpsertWithWhereUniqueWithoutSalonInput = {
    where: StaffMemberWhereUniqueInput
    update: XOR<StaffMemberUpdateWithoutSalonInput, StaffMemberUncheckedUpdateWithoutSalonInput>
    create: XOR<StaffMemberCreateWithoutSalonInput, StaffMemberUncheckedCreateWithoutSalonInput>
  }

  export type StaffMemberUpdateWithWhereUniqueWithoutSalonInput = {
    where: StaffMemberWhereUniqueInput
    data: XOR<StaffMemberUpdateWithoutSalonInput, StaffMemberUncheckedUpdateWithoutSalonInput>
  }

  export type StaffMemberUpdateManyWithWhereWithoutSalonInput = {
    where: StaffMemberScalarWhereInput
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyWithoutSalonInput>
  }

  export type StaffMemberScalarWhereInput = {
    AND?: StaffMemberScalarWhereInput | StaffMemberScalarWhereInput[]
    OR?: StaffMemberScalarWhereInput[]
    NOT?: StaffMemberScalarWhereInput | StaffMemberScalarWhereInput[]
    id?: StringFilter<"StaffMember"> | string
    salonId?: StringFilter<"StaffMember"> | string
    name?: StringFilter<"StaffMember"> | string
    nameAr?: StringNullableFilter<"StaffMember"> | string | null
    title?: StringNullableFilter<"StaffMember"> | string | null
    gender?: StringFilter<"StaffMember"> | string
    phone?: StringNullableFilter<"StaffMember"> | string | null
    avatarUrl?: StringNullableFilter<"StaffMember"> | string | null
    bio?: StringNullableFilter<"StaffMember"> | string | null
    specialties?: StringNullableFilter<"StaffMember"> | string | null
    isActive?: BoolFilter<"StaffMember"> | boolean
    rating?: FloatFilter<"StaffMember"> | number
    sortOrder?: IntFilter<"StaffMember"> | number
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
    updatedAt?: DateTimeFilter<"StaffMember"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutSalonInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutSalonInput, AppointmentUncheckedUpdateWithoutSalonInput>
    create: XOR<AppointmentCreateWithoutSalonInput, AppointmentUncheckedCreateWithoutSalonInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutSalonInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutSalonInput, AppointmentUncheckedUpdateWithoutSalonInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutSalonInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutSalonInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    appointmentNo?: StringFilter<"Appointment"> | string
    salonId?: StringFilter<"Appointment"> | string
    customerId?: StringNullableFilter<"Appointment"> | string | null
    customerName?: StringFilter<"Appointment"> | string
    customerPhone?: StringFilter<"Appointment"> | string
    customerGender?: StringNullableFilter<"Appointment"> | string | null
    date?: StringFilter<"Appointment"> | string
    timeSlot?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    totalPrice?: FloatFilter<"Appointment"> | number
    discount?: FloatFilter<"Appointment"> | number
    finalPrice?: FloatFilter<"Appointment"> | number
    paymentStatus?: StringFilter<"Appointment"> | string
    paymentMethod?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    source?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type GalleryImageUpsertWithWhereUniqueWithoutSalonInput = {
    where: GalleryImageWhereUniqueInput
    update: XOR<GalleryImageUpdateWithoutSalonInput, GalleryImageUncheckedUpdateWithoutSalonInput>
    create: XOR<GalleryImageCreateWithoutSalonInput, GalleryImageUncheckedCreateWithoutSalonInput>
  }

  export type GalleryImageUpdateWithWhereUniqueWithoutSalonInput = {
    where: GalleryImageWhereUniqueInput
    data: XOR<GalleryImageUpdateWithoutSalonInput, GalleryImageUncheckedUpdateWithoutSalonInput>
  }

  export type GalleryImageUpdateManyWithWhereWithoutSalonInput = {
    where: GalleryImageScalarWhereInput
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyWithoutSalonInput>
  }

  export type GalleryImageScalarWhereInput = {
    AND?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    OR?: GalleryImageScalarWhereInput[]
    NOT?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    salonId?: StringFilter<"GalleryImage"> | string
    url?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    gender?: StringFilter<"GalleryImage"> | string
    sortOrder?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutSalonInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutSalonInput, ReviewUncheckedUpdateWithoutSalonInput>
    create: XOR<ReviewCreateWithoutSalonInput, ReviewUncheckedCreateWithoutSalonInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutSalonInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutSalonInput, ReviewUncheckedUpdateWithoutSalonInput>
  }

  export type ReviewUpdateManyWithWhereWithoutSalonInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutSalonInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    salonId?: StringFilter<"Review"> | string
    customerName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    gender?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type SalonCreateWithoutServicesInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffMemberCreateNestedManyWithoutSalonInput
    appointments?: AppointmentCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageCreateNestedManyWithoutSalonInput
    reviews?: ReviewCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffMemberUncheckedCreateNestedManyWithoutSalonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageUncheckedCreateNestedManyWithoutSalonInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutServicesInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
  }

  export type AppointmentItemCreateWithoutServiceInput = {
    id?: string
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
    appointment: AppointmentCreateNestedOneWithoutItemsInput
    staff?: StaffMemberCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentItemUncheckedCreateWithoutServiceInput = {
    id?: string
    appointmentId: string
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemCreateOrConnectWithoutServiceInput = {
    where: AppointmentItemWhereUniqueInput
    create: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentItemCreateManyServiceInputEnvelope = {
    data: AppointmentItemCreateManyServiceInput | AppointmentItemCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutServicesInput = {
    update: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutServicesInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type SalonUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffMemberUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffMemberUncheckedUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUncheckedUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type AppointmentItemUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentItemWhereUniqueInput
    update: XOR<AppointmentItemUpdateWithoutServiceInput, AppointmentItemUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentItemCreateWithoutServiceInput, AppointmentItemUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentItemUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentItemWhereUniqueInput
    data: XOR<AppointmentItemUpdateWithoutServiceInput, AppointmentItemUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentItemUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentItemScalarWhereInput
    data: XOR<AppointmentItemUpdateManyMutationInput, AppointmentItemUncheckedUpdateManyWithoutServiceInput>
  }

  export type AppointmentItemScalarWhereInput = {
    AND?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
    OR?: AppointmentItemScalarWhereInput[]
    NOT?: AppointmentItemScalarWhereInput | AppointmentItemScalarWhereInput[]
    id?: StringFilter<"AppointmentItem"> | string
    appointmentId?: StringFilter<"AppointmentItem"> | string
    serviceId?: StringNullableFilter<"AppointmentItem"> | string | null
    staffId?: StringNullableFilter<"AppointmentItem"> | string | null
    serviceName?: StringFilter<"AppointmentItem"> | string
    staffName?: StringNullableFilter<"AppointmentItem"> | string | null
    price?: FloatFilter<"AppointmentItem"> | number
    duration?: IntFilter<"AppointmentItem"> | number
  }

  export type SalonCreateWithoutStaffInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutSalonInput
    appointments?: AppointmentCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageCreateNestedManyWithoutSalonInput
    reviews?: ReviewCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageUncheckedCreateNestedManyWithoutSalonInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutStaffInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutStaffInput, SalonUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentItemCreateWithoutStaffInput = {
    id?: string
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
    appointment: AppointmentCreateNestedOneWithoutItemsInput
    service?: ServiceCreateNestedOneWithoutAppointmentItemsInput
  }

  export type AppointmentItemUncheckedCreateWithoutStaffInput = {
    id?: string
    appointmentId: string
    serviceId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemCreateOrConnectWithoutStaffInput = {
    where: AppointmentItemWhereUniqueInput
    create: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentItemCreateManyStaffInputEnvelope = {
    data: AppointmentItemCreateManyStaffInput | AppointmentItemCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutStaffInput = {
    update: XOR<SalonUpdateWithoutStaffInput, SalonUncheckedUpdateWithoutStaffInput>
    create: XOR<SalonCreateWithoutStaffInput, SalonUncheckedCreateWithoutStaffInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutStaffInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutStaffInput, SalonUncheckedUpdateWithoutStaffInput>
  }

  export type SalonUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUncheckedUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type AppointmentItemUpsertWithWhereUniqueWithoutStaffInput = {
    where: AppointmentItemWhereUniqueInput
    update: XOR<AppointmentItemUpdateWithoutStaffInput, AppointmentItemUncheckedUpdateWithoutStaffInput>
    create: XOR<AppointmentItemCreateWithoutStaffInput, AppointmentItemUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentItemUpdateWithWhereUniqueWithoutStaffInput = {
    where: AppointmentItemWhereUniqueInput
    data: XOR<AppointmentItemUpdateWithoutStaffInput, AppointmentItemUncheckedUpdateWithoutStaffInput>
  }

  export type AppointmentItemUpdateManyWithWhereWithoutStaffInput = {
    where: AppointmentItemScalarWhereInput
    data: XOR<AppointmentItemUpdateManyMutationInput, AppointmentItemUncheckedUpdateManyWithoutStaffInput>
  }

  export type AppointmentCreateWithoutCustomerInput = {
    id?: string
    appointmentNo: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutAppointmentsInput
    items?: AppointmentItemCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    appointmentNo: string
    salonId: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: AppointmentItemUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SalonCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutSalonInput
    staff?: StaffMemberCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageCreateNestedManyWithoutSalonInput
    reviews?: ReviewCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    staff?: StaffMemberUncheckedCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageUncheckedCreateNestedManyWithoutSalonInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutAppointmentsInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutAppointmentsInput, SalonUncheckedCreateWithoutAppointmentsInput>
  }

  export type CustomerCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    gender?: string | null
    notes?: string | null
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    gender?: string | null
    notes?: string | null
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutAppointmentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentItemCreateWithoutAppointmentInput = {
    id?: string
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
    service?: ServiceCreateNestedOneWithoutAppointmentItemsInput
    staff?: StaffMemberCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentItemUncheckedCreateWithoutAppointmentInput = {
    id?: string
    serviceId?: string | null
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentItemWhereUniqueInput
    create: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentItemCreateManyAppointmentInputEnvelope = {
    data: AppointmentItemCreateManyAppointmentInput | AppointmentItemCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutAppointmentsInput = {
    update: XOR<SalonUpdateWithoutAppointmentsInput, SalonUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<SalonCreateWithoutAppointmentsInput, SalonUncheckedCreateWithoutAppointmentsInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutAppointmentsInput, SalonUncheckedUpdateWithoutAppointmentsInput>
  }

  export type SalonUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUncheckedUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUncheckedUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type CustomerUpsertWithoutAppointmentsInput = {
    update: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CustomerUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentItemUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentItemWhereUniqueInput
    update: XOR<AppointmentItemUpdateWithoutAppointmentInput, AppointmentItemUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentItemCreateWithoutAppointmentInput, AppointmentItemUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentItemUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentItemWhereUniqueInput
    data: XOR<AppointmentItemUpdateWithoutAppointmentInput, AppointmentItemUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentItemUpdateManyWithWhereWithoutAppointmentInput = {
    where: AppointmentItemScalarWhereInput
    data: XOR<AppointmentItemUpdateManyMutationInput, AppointmentItemUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentCreateWithoutItemsInput = {
    id?: string
    appointmentNo: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutAppointmentsInput
    customer?: CustomerCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutItemsInput = {
    id?: string
    appointmentNo: string
    salonId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutItemsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutItemsInput, AppointmentUncheckedCreateWithoutItemsInput>
  }

  export type ServiceCreateWithoutAppointmentItemsInput = {
    id?: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentItemsInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutAppointmentItemsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentItemsInput, ServiceUncheckedCreateWithoutAppointmentItemsInput>
  }

  export type StaffMemberCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutStaffInput
  }

  export type StaffMemberUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    salonId: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberCreateOrConnectWithoutAppointmentsInput = {
    where: StaffMemberWhereUniqueInput
    create: XOR<StaffMemberCreateWithoutAppointmentsInput, StaffMemberUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentUpsertWithoutItemsInput = {
    update: XOR<AppointmentUpdateWithoutItemsInput, AppointmentUncheckedUpdateWithoutItemsInput>
    create: XOR<AppointmentCreateWithoutItemsInput, AppointmentUncheckedCreateWithoutItemsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutItemsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutItemsInput, AppointmentUncheckedUpdateWithoutItemsInput>
  }

  export type AppointmentUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutAppointmentsNestedInput
    customer?: CustomerUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutAppointmentItemsInput = {
    update: XOR<ServiceUpdateWithoutAppointmentItemsInput, ServiceUncheckedUpdateWithoutAppointmentItemsInput>
    create: XOR<ServiceCreateWithoutAppointmentItemsInput, ServiceUncheckedCreateWithoutAppointmentItemsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentItemsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentItemsInput, ServiceUncheckedUpdateWithoutAppointmentItemsInput>
  }

  export type ServiceUpdateWithoutAppointmentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUpsertWithoutAppointmentsInput = {
    update: XOR<StaffMemberUpdateWithoutAppointmentsInput, StaffMemberUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<StaffMemberCreateWithoutAppointmentsInput, StaffMemberUncheckedCreateWithoutAppointmentsInput>
    where?: StaffMemberWhereInput
  }

  export type StaffMemberUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: StaffMemberWhereInput
    data: XOR<StaffMemberUpdateWithoutAppointmentsInput, StaffMemberUncheckedUpdateWithoutAppointmentsInput>
  }

  export type StaffMemberUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffMemberUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateWithoutGalleryInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutSalonInput
    staff?: StaffMemberCreateNestedManyWithoutSalonInput
    appointments?: AppointmentCreateNestedManyWithoutSalonInput
    reviews?: ReviewCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutGalleryInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    staff?: StaffMemberUncheckedCreateNestedManyWithoutSalonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSalonInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutGalleryInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutGalleryInput, SalonUncheckedCreateWithoutGalleryInput>
  }

  export type SalonUpsertWithoutGalleryInput = {
    update: XOR<SalonUpdateWithoutGalleryInput, SalonUncheckedUpdateWithoutGalleryInput>
    create: XOR<SalonCreateWithoutGalleryInput, SalonUncheckedCreateWithoutGalleryInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutGalleryInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutGalleryInput, SalonUncheckedUpdateWithoutGalleryInput>
  }

  export type SalonUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUncheckedUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutSalonNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateWithoutReviewsInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutSalonInput
    staff?: StaffMemberCreateNestedManyWithoutSalonInput
    appointments?: AppointmentCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    nameAr?: string | null
    slug: string
    gender?: string
    logoUrl?: string | null
    coverUrl?: string | null
    description?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    city?: string | null
    openTime?: string | null
    closeTime?: string | null
    workDays?: string | null
    isActive?: boolean
    isFeatured?: boolean
    rating?: number
    reviewCount?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    staff?: StaffMemberUncheckedCreateNestedManyWithoutSalonInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutSalonInput
    gallery?: GalleryImageUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutReviewsInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutReviewsInput, SalonUncheckedCreateWithoutReviewsInput>
  }

  export type SalonUpsertWithoutReviewsInput = {
    update: XOR<SalonUpdateWithoutReviewsInput, SalonUncheckedUpdateWithoutReviewsInput>
    create: XOR<SalonCreateWithoutReviewsInput, SalonUncheckedCreateWithoutReviewsInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutReviewsInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutReviewsInput, SalonUncheckedUpdateWithoutReviewsInput>
  }

  export type SalonUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    workDays?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    staff?: StaffMemberUncheckedUpdateManyWithoutSalonNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutSalonNestedInput
    gallery?: GalleryImageUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type ServiceCreateManySalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    description?: string | null
    gender?: string
    duration: number
    price: number
    discountPrice?: number | null
    imageUrl?: string | null
    isActive?: boolean
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffMemberCreateManySalonInput = {
    id?: string
    name: string
    nameAr?: string | null
    title?: string | null
    gender?: string
    phone?: string | null
    avatarUrl?: string | null
    bio?: string | null
    specialties?: string | null
    isActive?: boolean
    rating?: number
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManySalonInput = {
    id?: string
    appointmentNo: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageCreateManySalonInput = {
    id?: string
    url: string
    caption?: string | null
    gender?: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ReviewCreateManySalonInput = {
    id?: string
    customerName: string
    rating?: number
    comment: string
    gender?: string | null
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type ServiceUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentItems?: AppointmentItemUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentItems?: AppointmentItemUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentItemUpdateManyWithoutStaffNestedInput
  }

  export type StaffMemberUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentItemUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffMemberUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutAppointmentsNestedInput
    items?: AppointmentItemUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: AppointmentItemUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentItemCreateManyServiceInput = {
    id?: string
    appointmentId: string
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    appointment?: AppointmentUpdateOneRequiredWithoutItemsNestedInput
    staff?: StaffMemberUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentItemUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemCreateManyStaffInput = {
    id?: string
    appointmentId: string
    serviceId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    appointment?: AppointmentUpdateOneRequiredWithoutItemsNestedInput
    service?: ServiceUpdateOneWithoutAppointmentItemsNestedInput
  }

  export type AppointmentItemUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: string
    appointmentNo: string
    salonId: string
    customerName: string
    customerPhone: string
    customerGender?: string | null
    date: string
    timeSlot: string
    status?: string
    totalPrice?: number
    discount?: number
    finalPrice?: number
    paymentStatus?: string
    paymentMethod?: string | null
    notes?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutAppointmentsNestedInput
    items?: AppointmentItemUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: AppointmentItemUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentNo?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerGender?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentItemCreateManyAppointmentInput = {
    id?: string
    serviceId?: string | null
    staffId?: string | null
    serviceName: string
    staffName?: string | null
    price: number
    duration?: number
  }

  export type AppointmentItemUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    service?: ServiceUpdateOneWithoutAppointmentItemsNestedInput
    staff?: StaffMemberUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentItemUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentItemUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: StringFieldUpdateOperationsInput | string
    staffName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
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