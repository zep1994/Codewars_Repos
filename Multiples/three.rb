
def solution(a)
    sum=0
    (1...a).each { |x| sum+=x if x%3==0 or x%5==0 }
    return sum
  end
  
  solution(10)
  solution(20)
  # solution(200)