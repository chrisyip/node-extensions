# Array

    forEach without context
    ✓  native forEach x 1,065,786 ops/sec ±0.98% (95 runs sampled)
    ✓  new forEach x 18,267,794 ops/sec ±0.69% (97 runs sampled)
    ✓  fast.js forEach x 22,303,601 ops/sec ±0.65% (97 runs sampled)
    ✓  lodash forEach x 18,528,058 ops/sec ±0.92% (95 runs sampled)
    Fastest is fast.js forEach

    map without context
    ✓  native map x 655,194 ops/sec ±2.29% (82 runs sampled)
    ✓  new map x 2,765,905 ops/sec ±6.13% (94 runs sampled)
    ✓  fast.js map x 9,385,774 ops/sec ±10.43% (92 runs sampled)
    ✓  lodash map x 5,612,072 ops/sec ±5.85% (97 runs sampled)
    Fastest is fast.js map

    some without context
    ✓  native some x 1,092,138 ops/sec ±0.46% (95 runs sampled)
    ✓  new some x 11,738,461 ops/sec ±12.99% (95 runs sampled)
    ✓  fast.js some x 22,765,057 ops/sec ±0.80% (98 runs sampled)
    ✓  lodash some x 9,952,549 ops/sec ±6.46% (93 runs sampled)
    Fastest is fast.js some

    every without context
    ✓  native every x 1,600,647 ops/sec ±0.57% (96 runs sampled)
    ✓  new every x 12,378,867 ops/sec ±12.85% (96 runs sampled)
    ✗  fast.js every:
    ✓  lodash every x 12,399,729 ops/sec ±0.58% (98 runs sampled)
    Fastest is lodash every

    filter without context
    ✓  native filter x 677,252 ops/sec ±2.15% (88 runs sampled)
    ✓  new filter x 6,264,013 ops/sec ±0.34% (98 runs sampled)
    ✓  fast.js filter x 22,090,055 ops/sec ±0.61% (101 runs sampled)
    ✓  lodash filter x 8,321,243 ops/sec ±7.21% (99 runs sampled)
    Fastest is fast.js filter

    find without context
    ✗  native find:
    ✓  new find x 5,821,458 ops/sec ±0.50% (99 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 9,086,038 ops/sec ±7.81% (96 runs sampled)
    Fastest is lodash find

    findIndex without context
    ✗  native findIndex:
    ✓  new findIndex x 18,829,532 ops/sec ±0.39% (101 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 9,994,419 ops/sec ±8.04% (94 runs sampled)
    Fastest is new findIndex

    forEach with context
    ✓  native forEach x 1,095,971 ops/sec ±0.68% (96 runs sampled)
    ✓  new forEach x 3,741,366 ops/sec ±0.79% (99 runs sampled)
    ✓  fast.js forEach x 3,815,305 ops/sec ±0.67% (96 runs sampled)
    ✓  lodash forEach x 2,093,108 ops/sec ±0.71% (96 runs sampled)
    Fastest is fast.js forEach

    map with context
    ✓  native map x 640,175 ops/sec ±1.99% (87 runs sampled)
    ✓  new map x 1,373,481 ops/sec ±0.65% (99 runs sampled)
    ✓  fast.js map x 2,450,068 ops/sec ±0.43% (97 runs sampled)
    ✓  lodash map x 1,372,007 ops/sec ±2.29% (92 runs sampled)
    Fastest is fast.js map

    some with context
    ✓  native some x 1,063,577 ops/sec ±0.71% (99 runs sampled)
    ✓  new some x 3,860,708 ops/sec ±0.73% (96 runs sampled)
    ✓  fast.js some x 3,742,251 ops/sec ±0.47% (96 runs sampled)
    ✓  lodash some x 1,304,238 ops/sec ±2.41% (94 runs sampled)
    Fastest is new some

    every with context
    ✓  native every x 2,029,343 ops/sec ±0.83% (98 runs sampled)
    ✓  new every x 2,539,171 ops/sec ±0.43% (100 runs sampled)
    ✗  fast.js every:
    ✓  lodash every x 2,555,683 ops/sec ±1.50% (97 runs sampled)
    Fastest is new every

    filter with context
    ✓  native filter x 657,503 ops/sec ±2.12% (87 runs sampled)
    ✓  new filter x 2,047,061 ops/sec ±0.69% (95 runs sampled)
    ✓  fast.js filter x 2,790,310 ops/sec ±0.50% (101 runs sampled)
    ✓  lodash filter x 1,679,034 ops/sec ±1.37% (93 runs sampled)
    Fastest is fast.js filter

    find with context
    ✗  native find:
    ✓  new find x 2,258,942 ops/sec ±0.33% (98 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 1,608,635 ops/sec ±2.26% (95 runs sampled)
    Fastest is new find

    findIndex with context
    ✗  native findIndex:
    ✓  new findIndex x 3,117,471 ops/sec ±0.61% (98 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 1,471,657 ops/sec ±2.70% (94 runs sampled)
    Fastest is new findIndex

    indexOf without context
    ✓  native indexOf x 2,707,174 ops/sec ±0.56% (99 runs sampled)
    ✓  new indexOf x 22,883,394 ops/sec ±0.64% (97 runs sampled)
    ✓  fast.js indexOf x 24,707,167 ops/sec ±0.39% (95 runs sampled)
    ✓  lodash indexOf x 21,093,693 ops/sec ±0.73% (96 runs sampled)
    Fastest is fast.js indexOf

    lastIndexOf without context
    ✓  native lastIndexOf x 3,238,124 ops/sec ±0.97% (98 runs sampled)
    ✓  new lastIndexOf x 11,619,985 ops/sec ±13.76% (93 runs sampled)
    ✓  fast.js lastIndexOf x 28,762,860 ops/sec ±8.85% (96 runs sampled)
    ✓  lodash lastIndexOf x 10,618,960 ops/sec ±11.00% (96 runs sampled)
    Fastest is fast.js lastIndexOf

    indexOf with context
    ✓  native indexOf x 3,514,907 ops/sec ±0.45% (100 runs sampled)
    ✓  new indexOf x 29,835,417 ops/sec ±0.55% (99 runs sampled)
    ✓  fast.js indexOf x 33,212,097 ops/sec ±0.88% (97 runs sampled)
    ✓  lodash indexOf x 21,864,121 ops/sec ±3.06% (90 runs sampled)
    Fastest is fast.js indexOf

    lastIndexOf with context
    ✓  native lastIndexOf x 2,878,033 ops/sec ±3.92% (86 runs sampled)
    ✓  new lastIndexOf x 13,126,638 ops/sec ±15.55% (88 runs sampled)
    ✓  fast.js lastIndexOf x 7,046,893 ops/sec ±2.29% (94 runs sampled)
    ✓  lodash lastIndexOf x 9,112,216 ops/sec ±10.32% (86 runs sampled)
    Fastest is new lastIndexOf

    reduce without context
    ✓  native reduce x 1,008,000 ops/sec ±3.58% (89 runs sampled)
    ✓  new reduce x 16,486,149 ops/sec ±1.99% (94 runs sampled)
    ✓  fast.js reduce x 20,718,104 ops/sec ±0.93% (93 runs sampled)
    ✓  lodash reduce x 3,760,813 ops/sec ±1.67% (96 runs sampled)
    Fastest is fast.js reduce

    reduceRight without context
    ✓  native reduceRight x 1,071,893 ops/sec ±1.51% (90 runs sampled)
    ✓  new reduceRight x 5,192,680 ops/sec ±6.89% (84 runs sampled)
    ✓  fast.js reduceRight x 9,681,370 ops/sec ±11.12% (88 runs sampled)
    ✓  lodash reduceRight x 2,490,524 ops/sec ±1.44% (95 runs sampled)
    Fastest is fast.js reduceRight

    reduce with context
    ✓  native reduce x 1,030,723 ops/sec ±1.69% (94 runs sampled)
    ✓  new reduce x 18,452,011 ops/sec ±1.59% (97 runs sampled)
    ✓  fast.js reduce x 19,672,142 ops/sec ±1.58% (96 runs sampled)
    ✓  lodash reduce x 3,570,921 ops/sec ±1.60% (96 runs sampled)
    Fastest is fast.js reduce

    reduceRight with context
    ✓  native reduceRight x 1,036,595 ops/sec ±0.84% (94 runs sampled)
    ✓  new reduceRight x 8,909,394 ops/sec ±11.73% (95 runs sampled)
    ✓  fast.js reduceRight x 8,423,979 ops/sec ±8.16% (89 runs sampled)
    ✓  lodash reduceRight x 1,790,228 ops/sec ±2.99% (88 runs sampled)
    Fastest is new reduceRight
