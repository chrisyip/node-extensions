# Test Environment

```
node    0.11.14
fast.js 0.0.5
lodash  2.4.1
```

# Array

    forEach without context
    ✓  native forEach x 1,017,495 ops/sec ±1.33% (90 runs sampled)
    ✓  new forEach x 17,549,196 ops/sec ±1.00% (96 runs sampled)
    ✓  fast.js forEach x 21,619,828 ops/sec ±1.01% (95 runs sampled)
    ✓  lodash forEach x 18,441,663 ops/sec ±0.90% (92 runs sampled)
    Fastest is fast.js forEach
    
    map without context
    ✓  native map x 604,258 ops/sec ±3.13% (82 runs sampled)
    ✓  new map x 3,891,268 ops/sec ±1.05% (93 runs sampled)
    ✓  fast.js map x 6,934,485 ops/sec ±8.79% (89 runs sampled)
    ✓  lodash map x 3,512,609 ops/sec ±0.80% (94 runs sampled)
    Fastest is fast.js map
    
    some without context
    ✓  native some x 1,069,930 ops/sec ±0.80% (93 runs sampled)
    ✓  new some x 5,829,036 ops/sec ±8.41% (88 runs sampled)
    ✓  fast.js some x 6,279,727 ops/sec ±1.33% (90 runs sampled)
    ✓  lodash some x 7,063,474 ops/sec ±8.24% (91 runs sampled)
    Fastest is lodash some,new some
    
    every without context
    ✓  native every x 2,228,090 ops/sec ±1.16% (95 runs sampled)
    ✓  new every x 17,423,661 ops/sec ±1.25% (94 runs sampled)
    ✓  fast.js every x 28,935,064 ops/sec ±0.89% (96 runs sampled)
    ✓  lodash every x 4,820,810 ops/sec ±0.90% (97 runs sampled)
    Fastest is fast.js every
    
    filter without context
    ✓  native filter x 624,362 ops/sec ±2.97% (83 runs sampled)
    ✓  new filter x 5,075,501 ops/sec ±5.08% (92 runs sampled)
    ✓  fast.js filter x 6,087,584 ops/sec ±0.76% (95 runs sampled)
    ✓  lodash filter x 9,509,921 ops/sec ±1.11% (90 runs sampled)
    Fastest is lodash filter
    
    find without context
    ✓  native find x 1,027,677 ops/sec ±1.21% (92 runs sampled)
    ✓  new find x 8,941,355 ops/sec ±14.43% (92 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 4,501,096 ops/sec ±1.02% (94 runs sampled)
    Fastest is new find
    
    findIndex without context
    ✓  native findIndex x 1,071,535 ops/sec ±1.15% (94 runs sampled)
    ✓  new findIndex x 5,231,731 ops/sec ±0.87% (97 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 10,813,316 ops/sec ±1.55% (94 runs sampled)
    Fastest is lodash findIndex
    
    forEach with context
    ✓  native forEach x 1,068,963 ops/sec ±1.06% (93 runs sampled)
    ✓  new forEach x 3,567,275 ops/sec ±0.74% (95 runs sampled)
    ✓  fast.js forEach x 3,447,363 ops/sec ±1.05% (94 runs sampled)
    ✓  lodash forEach x 2,234,148 ops/sec ±1.45% (93 runs sampled)
    Fastest is new forEach
    
    map with context
    ✓  native map x 644,184 ops/sec ±2.48% (84 runs sampled)
    ✓  new map x 2,741,490 ops/sec ±1.60% (91 runs sampled)
    ✓  fast.js map x 2,146,067 ops/sec ±1.12% (91 runs sampled)
    ✓  lodash map x 1,282,495 ops/sec ±1.74% (90 runs sampled)
    Fastest is new map
    
    some with context
    ✓  native some x 1,054,694 ops/sec ±1.01% (94 runs sampled)
    ✓  new some x 3,666,486 ops/sec ±0.92% (94 runs sampled)
    ✓  fast.js some x 3,284,268 ops/sec ±4.84% (90 runs sampled)
    ✓  lodash some x 1,402,290 ops/sec ±1.36% (91 runs sampled)
    Fastest is new some,fast.js some
    
    every with context
    ✓  native every x 2,208,904 ops/sec ±0.95% (94 runs sampled)
    ✓  new every x 3,669,503 ops/sec ±1.03% (93 runs sampled)
    ✓  fast.js every x 11,412,984 ops/sec ±0.70% (94 runs sampled)
    ✓  lodash every x 2,893,922 ops/sec ±0.83% (94 runs sampled)
    Fastest is fast.js every
    
    filter with context
    ✓  native filter x 663,460 ops/sec ±3.09% (86 runs sampled)
    ✓  new filter x 2,248,719 ops/sec ±1.14% (96 runs sampled)
    ✓  fast.js filter x 2,409,052 ops/sec ±1.13% (94 runs sampled)
    ✓  lodash filter x 1,437,050 ops/sec ±4.04% (91 runs sampled)
    Fastest is fast.js filter
    
    find with context
    ✓  native find x 1,045,764 ops/sec ±1.12% (93 runs sampled)
    ✓  new find x 3,294,921 ops/sec ±4.28% (91 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 1,302,815 ops/sec ±0.90% (95 runs sampled)
    Fastest is new find
    
    findIndex with context
    ✓  native findIndex x 1,040,079 ops/sec ±2.00% (92 runs sampled)
    ✓  new findIndex x 2,629,824 ops/sec ±4.81% (89 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 1,610,257 ops/sec ±0.82% (94 runs sampled)
    Fastest is new findIndex
    
    indexOf without context
    ✓  native indexOf x 2,775,237 ops/sec ±0.89% (96 runs sampled)
    ✓  new indexOf x 20,940,487 ops/sec ±1.29% (90 runs sampled)
    ✓  fast.js indexOf x 23,367,358 ops/sec ±1.20% (94 runs sampled)
    ✓  lodash indexOf x 19,713,301 ops/sec ±1.24% (90 runs sampled)
    Fastest is fast.js indexOf
    
    lastIndexOf without context
    ✓  native lastIndexOf x 2,731,534 ops/sec ±0.98% (89 runs sampled)
    ✓  new lastIndexOf x 4,558,957 ops/sec ±1.02% (90 runs sampled)
    ✓  fast.js lastIndexOf x 14,045,267 ops/sec ±16.67% (91 runs sampled)
    ✓  lodash lastIndexOf x 5,666,353 ops/sec ±2.32% (91 runs sampled)
    Fastest is fast.js lastIndexOf
    
    indexOf with context
    ✓  native indexOf x 2,941,473 ops/sec ±1.04% (90 runs sampled)
    ✓  new indexOf x 27,299,943 ops/sec ±1.62% (94 runs sampled)
    ✓  fast.js indexOf x 30,687,292 ops/sec ±1.17% (96 runs sampled)
    ✓  lodash indexOf x 24,178,475 ops/sec ±2.15% (90 runs sampled)
    Fastest is fast.js indexOf
    
    lastIndexOf with context
    ✓  native lastIndexOf x 2,747,285 ops/sec ±1.63% (93 runs sampled)
    ✓  new lastIndexOf x 4,797,303 ops/sec ±1.43% (92 runs sampled)
    ✓  fast.js lastIndexOf x 6,530,766 ops/sec ±0.85% (92 runs sampled)
    ✓  lodash lastIndexOf x 14,860,775 ops/sec ±13.69% (87 runs sampled)
    Fastest is lodash lastIndexOf
    
    reduce without context
    ✓  native reduce x 1,036,798 ops/sec ±1.59% (94 runs sampled)
    ✓  new reduce x 17,568,888 ops/sec ±0.62% (96 runs sampled)
    ✓  fast.js reduce x 19,203,074 ops/sec ±1.50% (94 runs sampled)
    ✓  lodash reduce x 3,525,646 ops/sec ±0.96% (94 runs sampled)
    Fastest is fast.js reduce
    
    reduceRight without context
    ✓  native reduceRight x 1,074,821 ops/sec ±0.89% (95 runs sampled)
    ✓  new reduceRight x 3,361,218 ops/sec ±0.67% (96 runs sampled)
    ✓  fast.js reduceRight x 5,892,834 ops/sec ±0.95% (95 runs sampled)
    ✓  lodash reduceRight x 2,301,631 ops/sec ±1.61% (88 runs sampled)
    Fastest is fast.js reduceRight
    
    reduce with context
    ✓  native reduce x 1,008,533 ops/sec ±0.74% (94 runs sampled)
    ✓  new reduce x 17,872,140 ops/sec ±0.73% (92 runs sampled)
    ✓  fast.js reduce x 19,636,643 ops/sec ±0.60% (96 runs sampled)
    ✓  lodash reduce x 3,465,020 ops/sec ±0.74% (97 runs sampled)
    Fastest is fast.js reduce
    
    reduceRight with context
    ✓  native reduceRight x 1,023,253 ops/sec ±1.02% (93 runs sampled)
    ✓  new reduceRight x 4,819,269 ops/sec ±0.85% (96 runs sampled)
    ✓  fast.js reduceRight x 5,841,094 ops/sec ±1.26% (95 runs sampled)
    ✓  lodash reduceRight x 2,094,147 ops/sec ±2.90% (85 runs sampled)
    Fastest is fast.js reduceRight
