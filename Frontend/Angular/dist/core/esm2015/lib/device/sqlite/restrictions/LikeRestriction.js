/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class LikeRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        /** @type {?} */
        let newArray = [];
        values.forEach((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            newArray.push('%' + val + '%');
        }));
        this.values = newArray;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} LIKE ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LikeRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    LikeRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlrZVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9MaWtlUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU07Ozs7O0lBR0YsWUFBWSxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O1lBR2pCLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFHM0IsQ0FBQzs7OztJQUNELFNBQVM7UUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sVUFBVSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7O0lBdEJHLGlDQUF1Qjs7Ozs7SUFDdkIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBMaWtlUmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgY29sdW1uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IEFycmF5PHN0cmluZz47XG4gICAgY29uc3RydWN0b3IoY29sdW1uLCB2YWx1ZXMgPSBbXSkge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblxuXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaCgnJScgKyB2YWwgKyAnJScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ld0FycmF5O1xuXG4gICAgICAgIFxuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29sdW1ufSBMSUtFID8gYDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG59Il19