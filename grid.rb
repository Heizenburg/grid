array = [
  [1, 2, 5, 6],
  [8, 89, 44, 0],
  [8, 7, 23, 0],
  [6, 9, 3, 0]
]

def neighbours(array, (i , j)) 
  [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ].select { |h, w|
      h.between?(0, array.length - 1) && w.between?(0, array.first.length - 1)
    }.map do |row, col|
        array[row][col]
    end 
end

array.each_with_index do |row, i|
  row.each_with_index do |col, j|
    p array[i][j] 
    p neighbours(array, [i, j])
  end 
end 