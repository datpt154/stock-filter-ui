export enum UserGuideDataType {
  Text,
  Image,
  Category,
  TextDetail
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
        content: 'filter1_step3.PNG',
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
        content: 'filter2_step2.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Và kết quả theo điều kiện so sánh như dưới. Bạn chọn từng chỉ số sẽ có biểu đồ so sánh, giúp bạn có góc nhìn tổng quan hơn. Phía dưới cùng là Trung bình cộng của các công ty trên, nếu bạn định giá cổ phiếu theo P/E, P/B hoặc EV/EBITDA thì chỉ cần lấy trung bình nhân với tham số cổ phiếu bạn chọn',
      },
      {
        type: UserGuideDataType.Image,
        content: 'filter2_step3.PNG',
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
        content: 'screen1.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Các screen theo khuyến nghị của các nhà đầu tư hàng đầu.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'screen2.PNG',
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
        content: 'ptkt_pkc.PNG',
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
        content: 'search1.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Trang báo cáo tài chính là chi tiết BCTC của công ty trong 6 năm và 6 quý gần nhất.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'search2.PNG',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Trang chỉ số tài chính là thay đổi của các chỉ số trong thời gian vừa qua.',
      },
      {
        type: UserGuideDataType.Image,
        content: 'search3.PNG',
      },
    ]
  },
];

export const FinancialIndicatorsGuideData = [
  {
    title: 'Dữ liệu cơ bản',
    hint: 'Bao gồm các chỉ số doanh thu, lợi nhuận…',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Doanh số thuần',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức:  Doanh thu bán hàng - các khoản giảm trừ doanh thu',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Lợi nhuận gộp',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Doanh thu thuần – Giá vốn hàng bán',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Lợi nhuận ròng',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận sau thuế của cổ đông công ty mẹ',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Số lượng CPĐLH',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Số lượng cổ phiếu đang lưu hang',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EPS',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận ròng / số lượng cổ phiếu đang lưu hành',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EPS (quý) = lợi nhuận ròng quý/ Số lượng CPĐLH',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EPS (năm) = lợi nhuận ròng năm/ Số lượng CPĐLH',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EPS (TTM) = Lợi nhuận ròng 4 quý gần nhất/ Số lượng CPĐLH',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Giá trị sổ sách',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức:  Vốn chủ sở hữu / số lượng cổ phiếu đang lưu hành',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Giá thị trường',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá đóng cửa cuối',
      },
      {
        type: UserGuideDataType.Text,
        content: '(Quý): Là giá đóng của của ngày giao dịch cuối cùng của quý',
      },
      {
        type: UserGuideDataType.Text,
        content: '(Năm): Là giá đóng của ngày giao dịch cuối cùng của năm',
      },
      {
        type: UserGuideDataType.Text,
        content: '(TTM): Là giá đóng của ngày giao dịch cuối cùng của quý',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Capex',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Chí phí đầu tư tài sản cố định',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: PP&E hiện tại - PP&E trước đó + Khấu hao',
      },
      {
        type: UserGuideDataType.Category,
        content: 'FCF',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Dòng tiền tự do',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Dòng tiền từ hoạt động kinh doanh(CFO) – Capex',
      },
      {
        type: UserGuideDataType.Text,
        content: 'FCF(quý) = FCF(TTM) = CFO(TTM) – Capex(TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EBIT',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trước thuế và lãi vay',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận trước thuế TNDN + chi phí lãi vay',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EBITDA',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trước thuế và lãi vay cộng khấu hao',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận trước thuế TNDN + chi phí lãi vay + khấu hao',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Net working capital',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Vốn lưu động',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Tài sản ngắn hạn – nợ ngắn hạn',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EV',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Giá trị doanh nghiệp',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức:  Vốn hóa + Nợ - Tiền mặt',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Market capital',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Vốn hóa doanh nghiệp',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá thị trường * số lượng cổ phiếu đang lưu hành',
      },
    ]
  },
  {
    title: 'Chỉ số tăng trưởng',
    hint: 'Tăng trưởng của doanh nghiệp so với cùng kỳ',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng Doanh thu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Doanh thu (Quý): Doanh thu quý này/ Doanh thu quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Doanh thu (Năm): Doanh thu năm này/ Doanh thu năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Doanh thu (TTM): Tổng doanh thu 4 quý gần nhất/ Doanh thu 4 quý gần nhất năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng Lợi nhuận',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Lợi nhuận (Quý): Lợi nhuận quý này/ Lợi nhuận quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Lợi nhuận (Năm): Lợi nhuận năm này/ Lợi nhuận năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Lợi nhuận (TTM): Tổng Lợi nhuận 4 quý gần nhất/ Lợi nhuận 4 quý gần nhất năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng EPS',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EPS (Quý): EPS quý này/ EPS quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EPS (Năm): EPS năm này/ EPS năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EPS (TTM): Tổng EPS 4 quý gần nhất/ EPS 4 quý gần nhất năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng EBITDA',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EBITDA (Quý): EBITDA quý này/ EBITDA quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EBITDA (Năm): EBITDA năm này/ EBITDA năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT EBITDA (TTM): EBITDA 4 quý gần nhất/ EBITDA 4 quý gần nhất năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng Nợ',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Nợ (Quý) = TT Nợ (TTM): Nợ quý này/ Nợ quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT Nợ (Năm): Nợ năm này/ Nợ năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng VCSH',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT VCSH (Quý) = TT VCSH (TTM): VCSH quý này/ VCSH quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT VCSH (Năm): VCSH năm này/ VCSH năm trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tăng trưởng Tài Sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT VCSH (Quý) = TT VCSH (TTM): VCSH quý này/ VCSH quý này năm trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TT VCSH (Năm): VCSH năm này/ VCSH năm trước',
      },
    ]
  },
  {
    title: 'Chỉ số định giá',
    hint: 'Các chỉ số dùng để định giá doanh nghiệp: P/e, P/b…',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'P/E',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá thị trường / lợi nhuận trên mỗi cổ phiếu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'P/E (Quý) = P/E (TTM) = Giá thị trường/ EPS 4 quý gần nhất',
      },
      {
        type: UserGuideDataType.Text,
        content: 'P/E (Năm) = Giá thị trường/ EPS năm BCTC',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Peg',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá thị trường / lợi nhuận trên mỗi cổ phiếu/ Tốc độ tăng trưởng',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Peg (Quý) = Peg (TTM) = Giá thị trường/ EPS 4 quý gần nhất / tốc độ tăng trưởng',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Peg (Năm) = Giá thị trường/ EPS năm BCTC gần nhất/ tốc độ tăng trưởng',
      },
      {
        type: UserGuideDataType.Category,
        content: 'P/B',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá thị trường / Giá trị số sách',
      },
      {
        type: UserGuideDataType.Category,
        content: 'P/S',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Vốn hóa / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Text,
        content: 'P/S (Quý) = P/S (TTM) = Vốn hóa / Doanh thu 4 quý gần nhất',
      },
      {
        type: UserGuideDataType.Text,
        content: 'P/S (Năm) = Vốn hóa / Doanh thu thuần năm BCTC',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EV/EBITDA',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá trị doanh nghiệp / (Lợi nhuận trước thuế và lãi vay + khấu hao)',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EV/EBITDA (Quý) = EV/EBITDA (TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EV/EBIT',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá trị doanh nghiệp / Lợi nhuận trước thuế và lãi vay',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EV/EBIT (Quý) = EV/EBIT (TTM) ',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EV/FCF',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Giá trị doanh nghiệp / doanh tiền tự do',
      },
      {
        type: UserGuideDataType.Text,
        content: 'EV/FCF (Quý) = EV/FCF (TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Rev/FCF',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức:  Doanh thu / dòng tiền tự do',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Rev/FCF (Quý) = Rev/FCF (TTM) ',
      },
      {
        type: UserGuideDataType.Category,
        content: 'MC/CFO',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Vốn hóa / dòng tiền hoạt động kinh doanh',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Vốn hóa / dòng tiền hoạt động kinh doanh',
      },
      {
        type: UserGuideDataType.Category,
        content: 'MC/NWC',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức:  Vốn hóa / Vốn lưu động',
      },
      {
        type: UserGuideDataType.Text,
        content: 'MC/NWC (Quý) = MC/NWC (TTM)',
      },
    ]
  },
  {
    title: 'Hiệu quả đầu tư',
    hint: 'Các chỉ số đo lường hiệu quả của danh nghiệp',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Capex/Rev',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Chi phí đầu tư / Doanh thu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Capex/Rev (Quý) = Capex (TTM) = Tổng chi phí đầu tư 4 quý / Tổng doanh thu 4 quý',
      },
      {
        type: UserGuideDataType.Category,
        content: 'ROIC',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trên vốn đầu tư',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: EBIT/(NWC + PP&E - cash)',
      },
      {
        type: UserGuideDataType.Text,
        content: 'ROIC (Quý) = ROIC (TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'ROCE',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trên vốn sử dụng',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: EBIT/(Tổng tài sản – nợ ngắn hạn)',
      },
      {
        type: UserGuideDataType.Text,
        content: 'ROCE(Quý) = ROCE (TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'ROE',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trên vốn chủ sở hữu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận sau thuế / Vốn chủ sở hữu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'ROE (quý) = ROE (TTM)',
      },
      {
        type: UserGuideDataType.Category,
        content: 'ROA',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Lợi nhuận trên tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận sau thuế / Tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'ROA (Quý) = ROA (TTM)',
      },
    ]
  },
  {
    title: 'Lợi nhuận biên',
    hint: 'Tỷ lệ các chi phí và lợi nhuận so với doanh thu',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Tỷ lệ lãi gộp',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận gộp / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Lợi nhuận hoạt động biên',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận hoạt động / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Lợi nhuận trước thuế biên',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận trước thuế / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tỷ lệ lãi ròng',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận sau thuế / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Tỷ suất cổ tức',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Tiền trả cổ tức / Vốn hóa',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EBIT/REV',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Lợi nhuận trước thuế và lãi vay / Doanh thu thuần',
      },
      {
        type: UserGuideDataType.Category,
        content: 'EBITDA/REV',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: (Lợi nhuận trước thuế và lãi vay + khấu hao) / Doanh thu thuần',
      },
    ]
  },
  {
    title: 'Hiệu quả hoạt động, đòn bẩy tài chính',
    hint: 'Các chỉ số về xoay vòng vốn và sử dụng nợ (Chỉ số Quý = Chỉ số TTM)',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Vòng quay tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Doanh thu / Tổng tài sản',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Vòng quay phải thu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Doanh thu / Khoản phải thu trung bình',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Vòng quay phải trả',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Doanh thu / Khoản phải trả trung bình',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Vòng quay tồn kho',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Doanh thu / Hàng tồn kho trung bình',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Nợ/Tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Tổng nợ / Tổng tài sản trung bình',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Nợ/Vốn chủ sở hữu',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Tổng nợ / VCSH trung bình',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Nợ dài hạn/Vốn hóa',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Nợ dài hạn / Vốn hóa',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Khả năng trả lãi vay',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: EBIT / Chi phí lãi vay',
      }
    ]
  },
  {
    title: 'Hệ số thanh toán, rủi ro',
    hint: 'Đo lường khả năng trả nợ, phải thu và dự phòng (Chỉ số Quý = Chỉ số TTM)',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'Hệ số thanh toán hiện hành',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Tài sản lưu động/ Nợ ngắn hạn',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Hệ số thanh toán nhanh',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: (Tiền + Khoản đầu tư tài chính ngắn hạn) / Nợ ngắn hạn',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Hệ số thanh toán tiền mặt',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: (Tiền mặt + Chứng khoán khả mại)/ Nợ ngắn hạn',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Phải thu/Rev',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Các khoản phải thu / Doanh thu',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Phải thu/NI',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Các khoản phải thu / Lợi nhuận',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Dự phòng/Ni',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức: Trích lập dự phòng / Lợi nhuận',
      }
    ]
  },
  {
    title: 'Score',
    hint: 'Chấm điểm báo cáo tài chính của doanh nghiệp',
    detail: [
      {
        type: UserGuideDataType.Category,
        content: 'F-Score',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Điểm đánh giá sức mạnh tài chính của doanh nghiệp, thất nhất là 0 và cao nhất là 9. Điểm càng cao chứng tỏ năng lực tài chính càng mạnh',
      },
      {
        type: UserGuideDataType.TextDetail,
        content: [
          'Lợi nhuận tăng trưởng',
          'ROA năm nay > ROA năm trước',
          'CFO năm nay > CFO năm trước',
          'CFO > NI',
          'Nợ dài hạn/Tài sản của năm nay < năm trước',
          'Hệ số thanh toán hiện hành năm nay > năm trước',
          'Không phát hành cổ phiếu mới',
          'Lợi nhuận gộp năm nay > năm trước',
          'Vòng quay tổng tài sản năm nay > năm trước'
        ],
      },
      {
        type: UserGuideDataType.Category,
        content: 'C-Score',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Thang điểm từ 0-6 để xác định xem một công ty có “xào nấu” báo cáo tài chính không. 0 điểm tức là không có bằng chứng, còn 6 điểm là cho thấy nhiều khả năng báo cáo tài chính không trung thực. 6 yếu tố đánh giá bao gồm',
      },
      {
        type: UserGuideDataType.TextDetail,
        content: [
          'Lợi nhuận lớn hơn dòng tiền',
          'Số ngày thu tiền bình quân tăng',
          'Số ngày lưu kho tăng',
          'Tỷ số tài sản ngắn hạn khác / doanh thu tăng',
          'Tỷ lệ khấu hao / tài sản cố định giảm',
          'Tổng tài sản tăng hơn 10%',
        ],
      },
      {
        type: UserGuideDataType.Category,
        content: 'M-Score',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Dùng để đo khả năng làm giả lợi nhuận của công ty. M score nhỏ hơn – 2,22 thì công ty không phải đang làm giả lợi nhuận. Nếu M score càng lớn hơn – 2,22 thì khả năng giả mạo càng cao.',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Công thức tính M-score là: M = -4.84 + 0.92*DSRI + 0.528*GMI + 0.404*AQI + 0.892*SGI + 0.115*DEPI – 0.172*SGAI + 4.679*TATA – 0.327*LVGI',
      },
      {
        type: UserGuideDataType.Text,
        content: 'DRSI: Kỳ thu tiền bình quân kỳ này so với kỳ thu tiền bình quân kỳ trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'DRSI: Kỳ thu tiền bình quân kỳ này so với kỳ thu tiền bình quân kỳ trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'GMI: Đo lường tỷ lệ giữa tỷ lệ lợi nhuận biên (gộp) (GPM) kỳ trước so với năm GPM kỳ này',
      },
      {
        type: UserGuideDataType.Text,
        content: 'AQI: Tỷ lệ giữa Tài sản dài hạn nhưng không tính tài sản cố định) so với tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'SGI: Tỷ lệ giữa doanh thu thuần kỳ này chia cho doanh thu thuần kỳ trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'DEPI: Đo lường tỷ lệ khấu hao của kỳ trước chia cho kỳ này',
      },
      {
        type: UserGuideDataType.Text,
        content: 'SGAI: Đo lường tỷ lệ của chi phí bán hàng và quản lý kỳ này so với kỳ trước',
      },
      {
        type: UserGuideDataType.Text,
        content: 'TATA: Vốn lưu động ngoài tiền mặt trừ cho khấu hao chia cho tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'LVGI: tỷ lệ đòn bẩy tài chính kỳ này so với kỳ trước',
      },
      {
        type: UserGuideDataType.Category,
        content: 'Z-score',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Đo lường khả năng phá sản của doanh nghiệp. Nếu chỉ số này nhỏ hơn 1.8 thì khả năng phá sản cao, nếu lớn hơn 3 thì doanh nghiệp này có chất lượng tài sản tốt',
      },
      {
        type: UserGuideDataType.Text,
        content: 'Chỉ số này được tính như sau: Z-score = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5',
      },
      {
        type: UserGuideDataType.Text,
        content: 'X1 = Vốn lưu động / Tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'X2 = Lợi nhuận giữ lại / Tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'X3 = Lợi nhuận trước thuế và lãi vay / Tổng tài sản',
      },
      {
        type: UserGuideDataType.Text,
        content: 'X4 = Vốn hóa / Tổng nợ',
      },
      {
        type: UserGuideDataType.Text,
        content: 'X5 = Doanh thu / Tổng tài sản',
      }
    ]
  },
];
