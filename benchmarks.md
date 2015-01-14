# node.js

```
node    0.11.14
fast.js 0.0.5
lodash  2.4.1
```

## Array

```
forEach without context
✓  native forEach x 1,275,083 ops/sec ±1.86% (88 runs sampled)
✓  new forEach x 23,290,935 ops/sec ±0.92% (96 runs sampled)
✓  fast.js forEach x 26,652,344 ops/sec ±1.63% (92 runs sampled)
✓  lodash forEach x 23,019,239 ops/sec ±1.40% (87 runs sampled)
Fastest is fast.js forEach

map without context
✓  native map x 712,375 ops/sec ±3.03% (73 runs sampled)
✓  new map x 11,328,901 ops/sec ±2.85% (84 runs sampled)
✓  fast.js map x 6,173,179 ops/sec ±1.29% (92 runs sampled)
✓  lodash map x 4,535,154 ops/sec ±9.57% (83 runs sampled)
Fastest is new map

some without context
✓  native some x 1,268,864 ops/sec ±1.74% (91 runs sampled)
✓  new some x 5,688,506 ops/sec ±1.22% (89 runs sampled)
✓  fast.js some x 7,322,184 ops/sec ±1.64% (90 runs sampled)
✓  lodash some x 11,650,340 ops/sec ±3.77% (87 runs sampled)
Fastest is lodash some

every without context
✓  native every x 2,545,210 ops/sec ±1.53% (89 runs sampled)
✓  new every x 20,106,154 ops/sec ±1.59% (85 runs sampled)
✓  fast.js every x 31,136,026 ops/sec ±1.69% (89 runs sampled)
✓  lodash every x 13,846,294 ops/sec ±1.22% (92 runs sampled)
Fastest is fast.js every

filter without context
✓  native filter x 788,634 ops/sec ±2.42% (84 runs sampled)
✓  new filter x 5,708,779 ops/sec ±1.11% (93 runs sampled)
✓  fast.js filter x 7,269,297 ops/sec ±1.30% (94 runs sampled)
✓  lodash filter x 5,143,806 ops/sec ±1.16% (93 runs sampled)
Fastest is fast.js filter

find without context
✓  native find x 1,282,367 ops/sec ±1.17% (93 runs sampled)
✓  new find x 6,095,527 ops/sec ±1.04% (96 runs sampled)
✗  fast.js find:
✓  lodash find x 8,864,049 ops/sec ±10.17% (87 runs sampled)
Fastest is lodash find

findIndex without context
✓  native findIndex x 1,320,682 ops/sec ±1.10% (92 runs sampled)
✓  new findIndex x 21,663,816 ops/sec ±1.22% (93 runs sampled)
✗  fast.js findIndex:
✓  lodash findIndex x 5,527,901 ops/sec ±0.98% (96 runs sampled)
Fastest is new findIndex

forEach with context
✓  native forEach x 1,368,616 ops/sec ±1.06% (94 runs sampled)
✓  new forEach x 4,098,001 ops/sec ±1.17% (92 runs sampled)
✓  fast.js forEach x 4,035,094 ops/sec ±1.03% (94 runs sampled)
✓  lodash forEach x 2,580,649 ops/sec ±1.32% (92 runs sampled)
Fastest is new forEach

map with context
✓  native map x 809,771 ops/sec ±2.16% (85 runs sampled)
✓  new map x 2,817,712 ops/sec ±4.38% (87 runs sampled)
✓  fast.js map x 2,538,627 ops/sec ±2.02% (87 runs sampled)
✓  lodash map x 1,575,068 ops/sec ±1.79% (88 runs sampled)
Fastest is new map

some with context
✓  native some x 1,317,422 ops/sec ±1.39% (89 runs sampled)
✓  new some x 2,514,960 ops/sec ±1.76% (86 runs sampled)
✓  fast.js some x 2,579,413 ops/sec ±1.71% (87 runs sampled)
✓  lodash some x 1,541,546 ops/sec ±1.81% (91 runs sampled)
Fastest is fast.js some,new some

every with context
✓  native every x 2,738,678 ops/sec ±1.15% (93 runs sampled)
✓  new every x 3,810,688 ops/sec ±1.71% (87 runs sampled)
✓  fast.js every x 13,226,026 ops/sec ±2.15% (88 runs sampled)
✓  lodash every x 3,822,177 ops/sec ±1.71% (88 runs sampled)
Fastest is fast.js every

filter with context
✓  native filter x 739,979 ops/sec ±2.98% (81 runs sampled)
✓  new filter x 2,443,508 ops/sec ±1.62% (89 runs sampled)
✓  fast.js filter x 2,172,724 ops/sec ±2.50% (85 runs sampled)
✓  lodash filter x 1,661,483 ops/sec ±1.90% (89 runs sampled)
Fastest is new filter

find with context
✓  native find x 1,178,346 ops/sec ±1.74% (90 runs sampled)
✓  new find x 3,750,433 ops/sec ±1.52% (89 runs sampled)
✗  fast.js find:
✓  lodash find x 1,476,952 ops/sec ±3.71% (80 runs sampled)
Fastest is new find

findIndex with context
✓  native findIndex x 1,173,276 ops/sec ±1.94% (90 runs sampled)
✓  new findIndex x 2,335,843 ops/sec ±1.98% (86 runs sampled)
✗  fast.js findIndex:
✓  lodash findIndex x 1,768,462 ops/sec ±1.99% (89 runs sampled)
Fastest is new findIndex

indexOf without context
✓  native indexOf x 3,344,741 ops/sec ±1.31% (91 runs sampled)
✓  new indexOf x 26,896,459 ops/sec ±1.14% (95 runs sampled)
✓  fast.js indexOf x 29,069,339 ops/sec ±1.42% (87 runs sampled)
✓  lodash indexOf x 26,670,718 ops/sec ±1.40% (93 runs sampled)
Fastest is fast.js indexOf

lastIndexOf without context
✓  native lastIndexOf x 3,102,482 ops/sec ±1.58% (87 runs sampled)
✓  new lastIndexOf x 5,211,074 ops/sec ±2.13% (87 runs sampled)
✓  fast.js lastIndexOf x 7,059,039 ops/sec ±2.01% (85 runs sampled)
✓  lodash lastIndexOf x 6,899,615 ops/sec ±1.88% (87 runs sampled)
Fastest is fast.js lastIndexOf,lodash lastIndexOf

indexOf with context
✓  native indexOf x 3,274,503 ops/sec ±1.44% (90 runs sampled)
✓  new indexOf x 31,720,903 ops/sec ±1.74% (91 runs sampled)
✓  fast.js indexOf x 36,672,147 ops/sec ±1.88% (93 runs sampled)
✓  lodash indexOf x 30,121,280 ops/sec ±1.24% (94 runs sampled)
Fastest is fast.js indexOf

lastIndexOf with context
✓  native lastIndexOf x 3,180,651 ops/sec ±1.21% (90 runs sampled)
✓  new lastIndexOf x 5,607,521 ops/sec ±1.96% (87 runs sampled)
✓  fast.js lastIndexOf x 7,442,657 ops/sec ±1.71% (87 runs sampled)
✓  lodash lastIndexOf x 6,493,515 ops/sec ±1.00% (94 runs sampled)
Fastest is fast.js lastIndexOf

reduce without context
✓  native reduce x 1,343,919 ops/sec ±0.60% (97 runs sampled)
✓  new reduce x 17,984,532 ops/sec ±1.55% (88 runs sampled)
✓  fast.js reduce x 22,713,317 ops/sec ±1.30% (90 runs sampled)
✓  lodash reduce x 3,738,269 ops/sec ±2.05% (90 runs sampled)
Fastest is fast.js reduce

reduceRight without context
✓  native reduceRight x 1,242,870 ops/sec ±0.94% (95 runs sampled)
✓  new reduceRight x 3,892,719 ops/sec ±1.01% (96 runs sampled)
✓  fast.js reduceRight x 12,677,432 ops/sec ±14.60% (86 runs sampled)
✓  lodash reduceRight x 2,586,135 ops/sec ±1.50% (91 runs sampled)
Fastest is fast.js reduceRight

reduce with context
✓  native reduce x 1,301,644 ops/sec ±1.03% (95 runs sampled)
✓  new reduce x 19,701,163 ops/sec ±1.72% (87 runs sampled)
✓  fast.js reduce x 22,325,615 ops/sec ±1.30% (89 runs sampled)
✓  lodash reduce x 3,933,019 ops/sec ±1.32% (94 runs sampled)
Fastest is fast.js reduce

reduceRight with context
✓  native reduceRight x 1,191,306 ops/sec ±1.43% (91 runs sampled)
✓  new reduceRight x 5,294,557 ops/sec ±1.50% (89 runs sampled)
✓  fast.js reduceRight x 11,082,458 ops/sec ±12.61% (91 runs sampled)
✓  lodash reduceRight x 2,305,804 ops/sec ±1.96% (89 runs sampled)
Fastest is fast.js reduceRight
```

# io.js

```
io.js   1.0.0
fast.js 0.0.5
lodash  2.4.1
```

## Array

```
forEach without context
✓  native forEach x 2,273,759 ops/sec ±0.94% (97 runs sampled)
✓  new forEach x 23,812,022 ops/sec ±1.20% (92 runs sampled)
✓  fast.js forEach x 29,327,293 ops/sec ±0.99% (95 runs sampled)
✓  lodash forEach x 24,323,557 ops/sec ±1.17% (91 runs sampled)
Fastest is fast.js forEach

map without context
✓  native map x 1,753,368 ops/sec ±1.14% (95 runs sampled)
✓  new map x 14,843,023 ops/sec ±1.00% (96 runs sampled)
✓  fast.js map x 19,621,282 ops/sec ±1.13% (94 runs sampled)
✓  lodash map x 7,771,265 ops/sec ±1.18% (94 runs sampled)
Fastest is fast.js map

some without context
✓  native some x 2,270,177 ops/sec ±1.16% (94 runs sampled)
✓  new some x 6,573,093 ops/sec ±1.03% (93 runs sampled)
✓  fast.js some x 8,458,684 ops/sec ±1.10% (97 runs sampled)
✓  lodash some x 5,522,108 ops/sec ±1.19% (96 runs sampled)
Fastest is fast.js some

every without context
✓  native every x 3,312,627 ops/sec ±1.09% (94 runs sampled)
✓  new every x 24,217,173 ops/sec ±1.08% (91 runs sampled)
✓  fast.js every x 32,596,073 ops/sec ±1.46% (90 runs sampled)
✓  lodash every x 14,554,636 ops/sec ±1.07% (96 runs sampled)
Fastest is fast.js every

filter without context
✓  native filter x 1,802,835 ops/sec ±1.11% (96 runs sampled)
✓  new filter x 6,256,857 ops/sec ±0.95% (95 runs sampled)
✓  fast.js filter x 7,868,794 ops/sec ±1.12% (95 runs sampled)
✓  lodash filter x 11,730,746 ops/sec ±1.02% (90 runs sampled)
Fastest is lodash filter

find without context
✗  native find:
✓  new find x 22,549,929 ops/sec ±1.81% (90 runs sampled)
✗  fast.js find:
✓  lodash find x 5,673,172 ops/sec ±1.07% (96 runs sampled)
Fastest is new find

findIndex without context
✗  native findIndex:
✓  new findIndex x 7,037,854 ops/sec ±1.10% (94 runs sampled)
✗  fast.js findIndex:
✓  lodash findIndex x 5,959,886 ops/sec ±1.19% (94 runs sampled)
Fastest is new findIndex

forEach with context
✓  native forEach x 2,324,656 ops/sec ±1.07% (96 runs sampled)
✓  new forEach x 4,672,147 ops/sec ±0.99% (94 runs sampled)
✓  fast.js forEach x 4,738,812 ops/sec ±1.21% (96 runs sampled)
✓  lodash forEach x 3,002,934 ops/sec ±1.14% (94 runs sampled)
Fastest is fast.js forEach

map with context
✓  native map x 1,784,069 ops/sec ±1.21% (97 runs sampled)
✓  new map x 3,926,723 ops/sec ±1.32% (92 runs sampled)
✓  fast.js map x 2,815,764 ops/sec ±1.05% (95 runs sampled)
✓  lodash map x 1,879,896 ops/sec ±0.95% (95 runs sampled)
Fastest is new map

some with context
✓  native some x 2,360,833 ops/sec ±1.14% (91 runs sampled)
✓  new some x 3,003,550 ops/sec ±1.26% (92 runs sampled)
✓  fast.js some x 4,654,662 ops/sec ±1.07% (93 runs sampled)
✓  lodash some x 2,545,531 ops/sec ±1.14% (94 runs sampled)
Fastest is fast.js some

every with context
✓  native every x 3,484,400 ops/sec ±1.04% (97 runs sampled)
✓  new every x 4,702,423 ops/sec ±1.01% (95 runs sampled)
✓  fast.js every x 6,095,091 ops/sec ±1.11% (94 runs sampled)
✓  lodash every x 3,129,061 ops/sec ±1.00% (96 runs sampled)
Fastest is fast.js every

filter with context
✓  native filter x 1,840,815 ops/sec ±1.01% (93 runs sampled)
✓  new filter x 2,886,451 ops/sec ±1.10% (90 runs sampled)
✓  fast.js filter x 2,455,633 ops/sec ±2.48% (73 runs sampled)
✓  lodash filter x 2,548,910 ops/sec ±1.15% (93 runs sampled)
Fastest is new filter

find with context
✗  native find:
✓  new find x 4,667,812 ops/sec ±0.96% (95 runs sampled)
✗  fast.js find:
✓  lodash find x 2,127,824 ops/sec ±1.36% (94 runs sampled)
Fastest is new find

findIndex with context
✗  native findIndex:
✓  new findIndex x 3,076,461 ops/sec ±1.24% (94 runs sampled)
✗  fast.js findIndex:
✓  lodash findIndex x 2,250,827 ops/sec ±1.44% (92 runs sampled)
Fastest is new findIndex

indexOf without context
✓  native indexOf x 3,613,942 ops/sec ±1.10% (96 runs sampled)
✓  new indexOf x 30,727,315 ops/sec ±1.33% (94 runs sampled)
✓  fast.js indexOf x 33,196,659 ops/sec ±1.18% (95 runs sampled)
✓  lodash indexOf x 26,707,452 ops/sec ±1.51% (90 runs sampled)
Fastest is fast.js indexOf

lastIndexOf without context
✓  native lastIndexOf x 3,375,480 ops/sec ±1.25% (95 runs sampled)
✓  new lastIndexOf x 22,004,001 ops/sec ±1.11% (94 runs sampled)
✓  fast.js lastIndexOf x 30,973,564 ops/sec ±1.07% (95 runs sampled)
✓  lodash lastIndexOf x 8,128,653 ops/sec ±1.05% (95 runs sampled)
Fastest is fast.js lastIndexOf

indexOf with context
✓  native indexOf x 3,758,551 ops/sec ±1.18% (95 runs sampled)
✓  new indexOf x 37,052,839 ops/sec ±2.09% (90 runs sampled)
✓  fast.js indexOf x 42,856,073 ops/sec ±1.75% (89 runs sampled)
✓  lodash indexOf x 27,229,540 ops/sec ±3.44% (77 runs sampled)
Fastest is fast.js indexOf

lastIndexOf with context
✓  native lastIndexOf x 3,142,496 ops/sec ±1.28% (92 runs sampled)
✓  new lastIndexOf x 19,043,956 ops/sec ±2.07% (91 runs sampled)
✓  fast.js lastIndexOf x 25,953,157 ops/sec ±1.66% (89 runs sampled)
✓  lodash lastIndexOf x 17,035,203 ops/sec ±1.64% (88 runs sampled)
Fastest is fast.js lastIndexOf

reduce without context
✓  native reduce x 2,211,041 ops/sec ±1.92% (90 runs sampled)
✓  new reduce x 16,343,193 ops/sec ±1.81% (85 runs sampled)
✓  fast.js reduce x 18,715,656 ops/sec ±1.86% (88 runs sampled)
✓  lodash reduce x 3,677,600 ops/sec ±2.01% (87 runs sampled)
Fastest is fast.js reduce

reduceRight without context
✓  native reduceRight x 2,271,148 ops/sec ±1.24% (93 runs sampled)
✓  new reduceRight x 6,080,299 ops/sec ±1.76% (88 runs sampled)
✓  fast.js reduceRight x 21,342,708 ops/sec ±1.66% (89 runs sampled)
✓  lodash reduceRight x 3,904,382 ops/sec ±1.93% (91 runs sampled)
Fastest is fast.js reduceRight

reduce with context
✓  native reduce x 2,272,954 ops/sec ±1.32% (95 runs sampled)
✓  new reduce x 20,046,741 ops/sec ±1.28% (92 runs sampled)
✓  fast.js reduce x 20,991,916 ops/sec ±1.66% (90 runs sampled)
✓  lodash reduce x 3,557,199 ops/sec ±2.05% (89 runs sampled)
Fastest is fast.js reduce

reduceRight with context
✓  native reduceRight x 2,027,763 ops/sec ±1.41% (90 runs sampled)
✓  new reduceRight x 17,517,850 ops/sec ±1.59% (89 runs sampled)
✓  fast.js reduceRight x 20,631,951 ops/sec ±2.01% (87 runs sampled)
✓  lodash reduceRight x 3,571,246 ops/sec ±2.13% (85 runs sampled)
Fastest is fast.js reduceRight
```
