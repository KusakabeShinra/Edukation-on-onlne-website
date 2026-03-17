import os
def append_and_print_even_lines(text: str, filename: str) -> None:
    # Проверяем, нужно ли добавлять перевод строки перед текстом
    need_newline = False
    if os.path.exists(filename) and os.path.getsize(filename) > 0:
        need_newline = True

    # Добавление текста в файл
    with open(filename, 'a', encoding='utf-8') as f:
        if need_newline:
            f.write('\n')
        f.write(text)

    # Чтение и вывод четных строк
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        # Убираем символы перевода строки для красоты вывода, но можно оставить
        for i, line in enumerate(lines, start=1):
            if i % 2 == 0:
                print(line.rstrip('\n'))

# Пример использования
if __name__ == "__main__":
    append_and_print_even_lines("Первая запись", "test.txt")
    append_and_print_even_lines("Вторая запись", "test.txt")
    append_and_print_even_lines("Третья запись", "test.txt")