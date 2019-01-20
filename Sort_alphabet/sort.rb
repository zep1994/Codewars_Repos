def order_word(s)
    if s != ""
        s.chars.sort.join
    else 
        "Invalid String!"
    end
end

order_word("Theseaslkdfjadkls;fdsli;fdsj1034214`2@@*$@")