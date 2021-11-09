"""
Quiz: 지정 조건의 인자만 처리하기
filter_fn에서 True로 판정된 인자는 alter_value 값으로 대체해봅시다.
"""

# fmt: off

def mysum2(x, y):
    return x + y + 10

def mysum3(x, y, z):
    return x + y + z + 10

# 가변인자
def mysum(x, y, *args):
    # args is tuple
    print("args :", args)
    return x + y + sum(args) + 10

print(mysum())
print(mysum(1))
print(mysum(1, 2))
print(mysum(1, 2, 3))
