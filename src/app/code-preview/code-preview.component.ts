import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit {

  filename = '.bash_rc';
  codeText = `import UIKit

class CityViewController: UITableViewController {
    var city: City!
    @IBOutlet weak var temperatureLabel: UILabel!
    @IBOutlet weak var pressureLabel: UILabel!
    @IBOutlet weak var humidityLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        setupLabels()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    func setupLabels() {
        navigationItem.title = city.name
        temperatureLabel.text = String(format: "%.2f °K", city.temperature)
        pressureLabel.text = String(format: "%.2f hpa", city.pressure)
        humidityLabel.text = String(format: "%.2f %%", city.humidity)
    }
}`;

  constructor() { }

  ngOnInit() {
  }

}
