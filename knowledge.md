

# Next/Link
- Link
- href: đường dẫn 
- replace : thay thế đường dẫn hiện tại  và không luuw lại trong lịch sử
- scroll : mặc định là true  -> nghĩa là khi nhấn vào link thì sẽ scroll lên trên cùng , nếu không muốn scroll lên trên cùng thì thiết lập scrol là false
- prefetch : 


# Routing 
- Basic: 
    + Thư mục có file page.tsx -> sign-in/page.tsx  
        -> sẽ tạo ra đường dẫn của webapp là /sing-in

- Lưu ý trong thư mục phải có file `page.tsx`

- Segment dynamic: [name] -> [course]
    + Vi du: 
    ```js
        [course]/lession/page.tsx
        vscode-master/lesson?slug=bai-1 
    ```

- Nested routes: 
```js
/hello/world/page.tsx
- hello là segment 1
- world là segment 2
```

- Group : không tạo ra routing , mục đích chính của nó chỉ là gom các nhóm lại với nhau 
    + Ví dụ : (dashboard) sẽ không tạo ra /dashboard , nếu truy cập vào sẽ là not found

- Catch-all Segments: [...sing-in]

- Optional Catch-all Segments  [[...sing-in]]

# Params

- Params: Thông thường là dynamic routes: [item]/lesson
- SearchParams: Thường là những query ở trên url : ví dụ lesson?slug=html-css => slug chính là search params


# Next/Image
- Image yêu càu có 3 thuộc tính bắt buộc là : alt, width , height 
- Nếu sử dụng thuộc tính fill thì không cần width , height . Tuy nhiên thẻ img sẽ trở thành absolute , cho nên cần có 1 phàn tử chứa nó là relative 


# Mongoose
- Schema trong mongoose là 1 đối tượng xác định cấu trúc của tài liệu trong 1 collection của mongodb. Nó cho phép định nghĩa các trường , kiểu dữ liệu và các ràng buộc cho dữ liệu 

- Ví dụ : Collection `users` có `document` là :
 ```js
{
  "_id": {
    "$oid": "5a9427648b0beebeb69579e7"
  },
  "name": "Mercedes Tyler",
  "email": "mercedes_tyler@fakegmail.com",
}
 ```