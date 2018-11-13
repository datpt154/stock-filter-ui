export enum UserGuideDataType {
  Text,
  Image
}

export const UserGuideData = [
  {
    title: 'Đăng ký tài khoản',
    hint: 'Đăng ký và kích hoạt tài khoản INVALUE',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Đang phát triển.',
      }
    ]
  },
  {
    title: 'Lọc cổ phiếu',
    hint: 'Lọc cổ phiếu theo các chỉ số tài chính, với hơn 60 chỉ số từ cơ bản đến chuyên sâu.',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Từ màn hình của Invalue, bạn chọn “Bộ lọc” sau đó click chuột và “Bộ lọc” bên dưới để bắt đầu thực hiện lọc.',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Invalue có hơn 60 chỉ số tài chính để bạn có thể lọc cổ phiếu, bạn có thể chọn tối đa 5 điều kiện lọc.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'filter1_step1.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Sau đó bạn chọn điều kiện cho các chỉ số bạn chọn, bạn chọn thêm Thời gian lọc (Năm/Quý) và sàn giao dịch.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'filter1_step2.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Và kết quả theo điều kiện lọc như sau:',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
    ]
  },
  {
    title: 'So sánh cố phiếu',
    hint: 'So sánh cổ phiếu giúp bạn theo dõi các cổ phiếu cùng ngành, hoặc các cổ phiếu bạn đang quan tâm có chỉ số tài chính như thế nào, từ đó lựa chọn cổ phiếu phù hợp cho mình hơn, ngoài ra còn giúp bạn định giá cổ phiếu dễ hơn.',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Từ màn hình của Invalue, bạn chọn “Bộ lọc” sau đó click chuột và “So sánh” bên dưới để bắt đầu thực hiện lọc.',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Invalue có hơn 60 chỉ số tài chính để bạn có thể so sánh cổ phiếu, bạn có thể chọn tối đa 5 điều kiện so sánh.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'filter2_step1.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Sau đó chọn các cổ phiếu so sánh, và dữ liệu so sánh (Năm/Quý). Ví dụ so sánh các cổ phiếu trong ngành thép:',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Và kết quả theo điều kiện so sánh như dưới. Bạn chọn từng chỉ số sẽ có biểu đồ so sánh, giúp bạn có góc nhìn tổng quan hơn. Phía dưới cùng là Trung bình cộng của các công ty trên, nếu bạn định giá cổ phiếu theo P/E, P/B hoặc EV/EBITDA thì chỉ cần lấy trung bình nhân với tham số cổ phiếu bạn chọn',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
    ]
  },
  {
    title: 'Screen',
    hint: 'Invalue có lọc sẵn một số screen để xứ lý các bộ lọc cần trường dữ liệu dài (từ 2-5 năm). Đây là các cổ phiếu được lựa chọn theo khuyến nghị của các nhà đầu tư huyền thoai trên TTCK, đó là Graham, Fisher, Petter Lynch…',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Screen Tổng hợp nhanh là bộ lọc 10 cổ phiếu tốt nhất ở từng tiêu chí như Doanh thu cao nhất, tăng trưởng doanh thu cao nhất, P/E thất nhất hoặc P/B thấp nhất…',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Các screen theo khuyến nghị của các nhà đầu tư hàng đầu.',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
    ]
  },
  {
    title: 'Phân tích kỹ thuật',
    hint: 'Gồm các screen lọc theo một số chỉ số đơn giản đến phức tạp. Screen Phá kháng cự, và Thủng hỗ trợ để bạn xem xét những cổ phiếu cơ bản mình đang theo dõi có tín hiệu Mua-Bán theo kỹ thuật không.',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Gồm các screen lọc theo một số chỉ số đơn giản đến phức tạp. Screen Phá kháng cự, và Thủng hỗ trợ để bạn xem xét những cổ phiếu cơ bản mình đang theo dõi có tín hiệu Mua-Bán theo kỹ thuật không.',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Ngoài ra còn có Screen Trend Trader là một screen chuyên về PTKT. Được lọc theo nhiều tiêu chí khác nhau, sau đó được chuyên viên nhiều năm kinh nghiệm lọc thêm lần nữa để loại bỏ những cổ phiếu bị làm nhiễu. Trend trader là cổ phiếu đầu tư theo PTKT nhưng thời gian nắm giữ từ vài tuần đến vài tháng.',
      },
    ]
  },
  {
    title: 'Tìm kiếm một mã cổ phiếu',
    hint: 'Trang tổng quan cho bạn đánh giá nhanh về cổ phiếu này, các chỉ số tài chính, tăng trưởng, hiệu quả hoạt động và định giá.',
    detail: [
      {
        type: UserGuideDataType.Text,
        content: 'Từ giao diện INVALUE, bạn đánh mã cổ phiếu cần tìm kiếm vào ô “search”, rồi bạn nhấn enter để tiếp tục.',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Trang báo cáo tài chính là chi tiết BCTC của công ty trong 6 năm và 6 quý gần nhất.',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Trang chỉ số tài chính là thay đổi của các chỉ số trong thời gian vừa qua.',
      },
      {
        type: UserGuideDataType.Image,
        content: '',
      },
    ]
  },
];